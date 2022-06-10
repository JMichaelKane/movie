<script setup lang="ts">
	import { movieComponent } from "../../../../composables/User/panelHome";
</script>

<template>
	<div class="">
		<n-space justify="space-around" class="panel-container">
			<div
				class="text-white p-16px round-16px h-100px block-1 block-margin border-box w-20rem"
				style="
					background-image: linear-gradient(
						to right bottom,
						rgb(236, 71, 134),
						rgb(185, 85, 164)
					);
				"
			>
				<div class="text-16px">资源库</div>
				<n-space>
					<span class="text-30px text-white">1,000,000</span>
				</n-space>
			</div>

			<div
				class="text-white p-16px border-box round-16px h-100px block-2 block-margin w-20rem"
			>
				<div class="text-16px">影片量</div>
				<n-space>
					<span class="text-30px text-white">1,000,000</span>
				</n-space>
			</div>

			<div
				class="text-white p-16px border-box round-16px h-100px block-3 block-margin w-20rem"
			>
				<div class="text-16px">访问量</div>
				<n-space>
					<span class="text-30px text-white">1,000,000</span>
				</n-space>
			</div>
		</n-space>
		<div style="height: 20px"></div>
		<n-card title="近期影片" size="small">
			<movieComponent />
		</n-card>
	</div>
</template>

<style>
	.block-margin {
		margin: 0 10px;
	}
	.p-16px {
		padding: 15px;
	}
	.text-16px {
		font-size: 20px;
		font-weight: 700;
	}
	.text-white {
		/* --un-text-opacity: 1; */
		color: white;
	}
	.text-30px {
		font-size: 30px;
	}
	.block-1 {
		background-image: linear-gradient(to right bottom, rgb(236, 71, 134), rgb(185, 85, 164));
	}
	.block-2 {
		background-image: linear-gradient(to right bottom, rgb(134, 94, 192), rgb(81, 68, 180));
	}
	.block-3 {
		background-image: linear-gradient(to right bottom, rgb(86, 205, 243), rgb(113, 157, 227));
	}
	.block-4 {
		background-image: linear-gradient(to right bottom, rgb(252, 188, 37), rgb(246, 128, 87));
	}
	.round-16px {
		border-radius: 16px;
	}
	.h-100px {
		height: 100px;
	}
	.panel-container {
		padding: 20px 15px 0 15px;
	}
	.w-20rem {
		width: 30rem;
	}
</style>
