<script setup lang="ts">
	import { ref, watchPostEffect } from "vue";
	import { useRoute } from "vue-router";
	import { Get } from "../composables/home";
	import { deal } from "../composables/public";
	import { base_url } from "../composables/base";

	const route = useRoute(); //获取路由
	const change = ref(false); //切换按钮

	const result = ref<any>({
		movies: [],
	});
	const page = ref(1);
	const pageCount = ref(1);
	watchPostEffect(() => {
		Get(base_url + "search", {
			keyword: route.params.keyword,
			pg: page.value,
			num: 20,
		}).then((data) => {
			result.value = data;
			change.value = true;
			pageCount.value = data.pgCount;
			// console.log(data.pgCount);
		});
	});
</script>

<template>
	<div>
		<n-list bordered>
			<template #header> 影片搜索结果 </template>
			<template v-if="change">
				<template v-for="movie in result.movies" :key="movie.id">
					<router-link :to="'/play/' + movie.id">
						<SearchResult
							:imgUrl="movie.pic"
							:name="movie.name"
							:desc="deal(movie.description)"
							:director="movie.director"
							:actor="movie.actor"
							category=""
							:id="movie.id"
						/>
					</router-link>
				</template>
			</template>
			<template v-else>
				<SearchTmp v-for="none in 4" />
			</template>
		</n-list>
		<n-space justify="center">
			<n-pagination v-model:page="page" :page-count="pageCount" />
		</n-space>
	</div>
</template>

<style></style>
