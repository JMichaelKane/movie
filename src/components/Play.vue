<script setup lang="ts">
	import { urlProcess } from "../composables/play";
	import { base_url } from "../composables/base";
	const route = useRoute(); //定义路由处理

	const movie = ref({
		url: "",
		name: "",
		director: "",
		actor: "",
		description: "",
	}); //定义movie信息获取
	const url = ref(); //定义播放链接
	onBeforeMount(() => {
		fetch(base_url + "play/" + route.params.id)
			.then((response) => response.json())
			.then((data) => {
				movie.value = data;
				url.value = urlProcess(movie.value.url)[0].value;
			}); //获取电影信息
	});

	function judge(item: any) {
		return typeof item.value != "undefined";
	}
</script>

<template>
	<Header></Header>
	<n-grid cols=" 6 l:10 " item-responsive responsive="screen">
		<n-grid-item span="6" offset="0 l:2">
			<div class="play">
				<Dplayer :url="url" />
				<PlayMsg
					:name="movie.name"
					:director="movie.director"
					:actor="movie.actor"
					:description="movie.description"
				/>
				<div class="anthology">
					<n-space>
						<template v-for="item in urlProcess(movie.url)">
							<n-button v-if="judge(item)" @click="url = item.value">
								{{ item.name }}
							</n-button>
						</template>
					</n-space>
				</div>
			</div>
		</n-grid-item>
	</n-grid>
	<n-back-top :right="100" />
	<div class="no"></div>
</template>

<style>
	.play {
		margin-bottom: 50px;
	}
	.anthology {
		margin-top: 20px;
	}
	.no {
		width: 100%;
		height: 50px;
	}
</style>
