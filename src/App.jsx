import { useEffect, useState } from "react";
import { TVShopwApi } from "./api/tv-show";
import "./global.css";
import s from "./style.module.css";
import { BACKDROP_BASE_URL } from "./config";
import { Logo } from "./components/Logo/Logo";
import logo from "./assets/images/logo.png";
import { TVShowListItem } from "./components/TWShowListItem/TVShowListItem";

export function App() {
	const [currentTVShow, setCurrentTVShow] = useState();

	async function getPopulars() {
		const populars = await TVShopwApi.getPopularShows();
		if (populars.length > 0) {
			setCurrentTVShow(populars[0]);
		}
	}

	useEffect(() => {
		getPopulars();
	}, []);

	function setCurrentTvShowFromRecommendation(tvShow) {
		alert(JSON.stringify(tvShow));
	}

	return (
		<div
			className={s.main_container}
			style={{
				background: currentTVShow
					? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
					: "black",
			}}>
			<div className={s.header}>
				<div className="row">
					<div className="col-4">
						<Logo
							image={logo}
							title="WhatToWatch"
							subtitle="Find a show you may like to watch"
						/>
					</div>
					<div className="col-sm-12 col-md-4">
						<input style={{ width: "100%" }} type="text" />
					</div>
				</div>
			</div>
			<div className={s.recommended_shows}>
				{currentTVShow && (
					<>
						<TVShowListItem
							onClick={setCurrentTvShowFromRecommendation}
							tvShow={currentTVShow}
						/>
						<TVShowListItem
							onClick={setCurrentTvShowFromRecommendation}
							tvShow={currentTVShow}
						/>
						<TVShowListItem
							onClick={setCurrentTvShowFromRecommendation}
							tvShow={currentTVShow}
						/>
					</>
				)}
			</div>
		</div>
	);
}
