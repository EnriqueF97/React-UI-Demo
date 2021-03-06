import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import Button from "./Button";
import ListItem from "./ListItem";
import axios from "axios";
import { Spinner } from "react-bootstrap";

export default function SectionList({ apiSection, onSelect, ...props }) {
	const classes = useStyles();
	const [data, setData] = useState([{ id: 0, name: "" }]);
	const [currentPage, setCurrentPage] = useState(1);
	const [pageLimit] = useState(5);
	const [dataLimit] = useState(4);
	const [pages, setPages] = useState(0);
	const [control, setControl] = useState({
		isLoading: false,
	});

	useEffect(() => {
		/** fetch de axios con props */
		async function fetchData() {
			if (apiSection !== "/") {
				handleControl("isLoading", true);
				const response = await axios.request(`https://rickandmortyapi.com/api/${apiSection}`, {
					method: "get",
				});
				handleControl("isLoading", false);

				if (response.status === 200) {
					const fetchedDataArray = response.data.results;
					onSelect(fetchedDataArray[0]);
					return setData(fetchedDataArray);
				}

				throw new Error("Error en la petición del API Rick&Morty.");
			}
		}
		fetchData();
	}, [apiSection]);

	useEffect(() => {
		setPages(Math.round(data.length / dataLimit));
	}, [data, dataLimit]);

	/**Metodo necesario para controlar el componente de cargando... Activa y desactiva la retroalimentación */
	const handleControl = (control, value) => {
		setControl((prevState) => ({
			...prevState,
			[control]: value,
		}));
	};

	/**Al ser seleccionado un item, llama al metodo padre onSelect */
	const onSelectItem = (item) => {
		onSelect(item);
	};

	/**Ajusta el numero de pagina actual a uno más */
	const goToNextPage = () => {
		setCurrentPage((page) => page + 1);
	};

	/**Ajusta el numero de pagina actual a uno menos */
	const goToPreviousPage = () => {
		if (currentPage > 1) setCurrentPage((page) => page - 1);
	};

	/**Cambia el numero de pagina con un botón especifico de pagina (numerico) */
	const changePage = (event) => {
		const pageNumber = Number(event.target.innerText);
		setCurrentPage(pageNumber);
	};

	/**Funcion que retorna la informacion de data a partir de la pagina actual hasta un limite establecido con un slice. */
	function getPaginatedData() {
		const startIndex = currentPage * dataLimit - dataLimit;
		const endIndex = startIndex + dataLimit;
		return data.slice(startIndex, endIndex);
	}

	/** Funcion que retorna el numero de botones de pagina siguiente ([1, 2, 3] => [4, 5, 6]) */
	const getPaginationGroup = () => {
		let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
		return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
	};

	return (
		<>
			{/* Si isLoading es true, se muestra el componente de carga, este se prende y apaga al hacer fetch. */}
			{control.isLoading ? (
				<>
					<div style={{ padding: "2em" }}>
						<p style={{ fontSize: "calc(8px + 2vmin)", margin: "1vmin" }}>Cargando, espera...</p>
						<Spinner animation='border' variant='light'></Spinner>
					</div>
				</>
			) : (
				<div className={classes.paginationContainer}>
					{/* Muestra la información de data seleccionada a partir de un indice inicial hasta un final */}
					<div>
						{getPaginatedData().map((data, idx) => (
							<>
								<ListItem func={() => onSelectItem(data)} key={`${idx}s`} {...data} />
							</>
						))}
					</div>

					<div className={classes.pagination}>
						{/* Botón para pagina anterior */}
						<Button
							func={goToPreviousPage}
							text='Anterior'
							backgroundColor='#083070'
							active={""}
							fontColor='white'
						/>

						{/* Elementos cambio de página, de acuerdo al numero limite de paginas establecido en pagesLimit */}
						{getPaginationGroup().map((item, index) => (
							<Button
								key={`_${index}_`}
								active={currentPage === item}
								func={changePage}
								text={item}
								backgroundColor='#0b46a3'
								fontColor='white'
								small
							/>
						))}

						{/* Boton para pagina siguiente */}
						<Button
							func={goToNextPage}
							inactive={currentPage >= pages}
							text='Siguiente'
							backgroundColor='#083070'
							fontColor='white'
						/>
					</div>
				</div>
			)}
		</>
	);
}

/**Estilos */
const useStyles = createUseStyles({
	paginationContainer: {
		height: "100%",
		width: "50vmin",
		margin: "auto",
		marginTop: "2em",
		border: "1em",
	},
	pagination: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		paddingInline: "5vmin",
	},
	paginationItem: {
		background: "#fff",
		border: "2px solid #666",
		padding: "10px 15px",
		borderRadius: "10px",
		height: " 45px",
		width: " 45px",
		position: " relative",
		margin: "0 5px",
		cursor: " pointer",
		"& span": {
			position: "absolute",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
		},
	},
	next: {
		background: "#fff",
		border: "none",
		padding: "10px",
		color: "blue",
		boxShadow: "0 0 3px rgba(0, 0, 0, 0.4)",
		margin: "0 10px",
		cursor: "pointer",
	},
	prev: {
		background: "#fff",
		border: "none",
		padding: "10px",
		color: "blue",
		boxShadow: "0 0 3px rgba(0, 0, 0, 0.4)",
		margin: "0 10px",
		cursor: "pointer",
	},
	paginationItemActive: {
		border: "1px solid #888",
		color: " #888",
		pointerRvents: "none",
		borderRadius: "8px",
	},
	prevDisabled: {
		pointerRvents: "none",
		boxShadow: "none",
		color: "#999",
	},
	nextDisabled: {
		pointerRvents: "none",
		boxShadow: "none",
		color: "#999",
	},
});
