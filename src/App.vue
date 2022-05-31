<script setup lang="ts"></script>

<template>
	<n-scrollbar style="max-height: 100vh">
		<Header></Header>
		<n-grid cols=" 6 l:10 " item-responsive responsive="screen">
			<n-grid-item span="6" offset="0 l:2">
				<router-view />
			</n-grid-item>
		</n-grid>
		<n-back-top :right="100" />
		<div class="no"></div>
	</n-scrollbar>
</template>

<style>
	body {
		margin: 0;
	}
	.user-drag {
		-webkit-user-drag: none;
	}
	a {
		text-decoration: none; /* 去除默认的下划线 */
		outline: none; /* 去除旧版浏览器的点击后的外虚线框 */
		color: #000; /* 去除默认的颜色和点击后变化的颜色 */
	}
	.no {
		width: 100%;
		height: 50px;
	}
</style>
