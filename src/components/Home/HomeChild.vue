<script setup lang="ts">
	import { ref } from "vue";
	import { Get } from "../../composables/home";
	import { deal } from "../../composables/public";
	import { base_url } from "../../composables/base";

	const movies1 = ref(); //电影
	const movies2 = ref(); //电视剧
	const movies3 = ref(); //动漫
	Get(base_url + "category/1", {
		num: 12,
		pg: 1,
	}).then((res: any) => {
		movies1.value = res.movies;
	});
	Get(base_url + "category/3", {
		num: 12,
		pg: 1,
	}).then((res: any) => {
		movies2.value = res.movies;
	});
	Get(base_url + "category/2", {
		num: 12,
		pg: 1,
	}).then((res: any) => {
		movies3.value = res.movies;
	});
</script>

<template>
	<div class="home-body">
		<Bar category="film" :tags="[]" />
		<n-grid cols="5" item-responsive responsive="screen">
			<n-grid-item span="5 l:5">
				<n-grid cols="3 l:6" item-responsive responsive="screen">
					<n-grid-item v-for="movie in movies1" :id="movie.id">
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
					<n-grid-item v-for="movie in movies3" :id="movie.id">
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
					<n-grid-item v-for="movie in movies2" :id="movie.id">
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
