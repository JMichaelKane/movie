<script setup lang="ts">
	import { ref } from "vue";
	import { Get, Movie } from "../../../composables/home";
	import { deal } from "../../../composables/public";
	import { base_url } from "../../../composables/base";

	const movies1 = ref<Movie>({
		movies: [],
		pgCount: 0,
	}); //电影
	const movies2 = ref<Movie>({
		movies: [],
		pgCount: 0,
	}); //电视剧
	const movies3 = ref<Movie>({
		movies: [],
		pgCount: 0,
	}); //动漫
	onMounted(() => {
		Get(
			base_url + "category/1",
			{
				num: 12,
				pg: 1,
			},
			movies1
		);
		Get(
			base_url + "category/3",
			{
				num: 12,
				pg: 1,
			},
			movies1
		);
		Get(
			base_url + "category/2",
			{
				num: 12,
				pg: 1,
			},
			movies3
		);
	});
</script>

<template>
	<div class="home-body">
		<Bar category="film" :tags="[]" />
		<n-grid cols="5" item-responsive responsive="screen">
			<n-grid-item span="5 l:5">
				<n-grid cols="3 l:6" item-responsive responsive="screen">
					<n-grid-item v-for="movie in movies1.movies" :id="movie.id">
						<router-link :to="'/play/' + movie.id">
							<Mv
								:imgUrl="movie.pic"
								:name="movie.name"
								:desc="deal(movie.description)"
							/>
						</router-link>
					</n-grid-item>
				</n-grid>
			</n-grid-item>
		</n-grid>
		<Bar category="animation" :tags="[]" />
		<n-grid cols="5" item-responsive responsive="screen">
			<n-grid-item span="5 l:5">
				<n-grid cols="3 l:6" item-responsive responsive="screen">
					<n-grid-item v-for="movie in movies3.movies" :id="movie.id">
						<router-link :to="'/play/' + movie.id">
							<Mv
								:imgUrl="movie.pic"
								:name="movie.name"
								:desc="deal(movie.description)"
							/>
						</router-link>
					</n-grid-item>
				</n-grid>
			</n-grid-item>
		</n-grid>
		<Bar category="tv" :tags="[]" />
		<n-grid cols="5" item-responsive responsive="screen">
			<n-grid-item span="5 l:5">
				<n-grid cols="3 l:6" item-responsive responsive="screen">
					<n-grid-item v-for="movie in movies2.movies" :id="movie.id">
						<router-link :to="'/play/' + movie.id">
							<Mv
								:imgUrl="movie.pic"
								:name="movie.name"
								:desc="deal(movie.description)"
							/>
						</router-link>
					</n-grid-item>
				</n-grid>
			</n-grid-item>
		</n-grid>
	</div>
</template>

<style>
	.home-body {
		padding: 10px 20px;
	}

	.list-item {
		padding: 0 15px 10px 0;
		margin-bottom: 10px;
		border-style: solid;
		border-width: 0 0 1px 0;
		border-color: hsl(240, 23%, 95%);
	}
</style>
