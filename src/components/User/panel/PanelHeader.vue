<script setup lang="ts">
	import headimg from "/svg/head-img.svg";

	const options = ref([
		{
			label: "系统设置",
			key: "config",
		},
		{
			label: "登出账户",
			key: "logout",
		},
	]);
</script>

<template>
	<div class="panel-header">
		<n-space class="space" justify="space-between">
			<div class="breadcrumb">
				<n-breadcrumb>
					<n-breadcrumb-item> 首页</n-breadcrumb-item>
					<n-breadcrumb-item> 仪表盘</n-breadcrumb-item>
				</n-breadcrumb>
			</div>
			<n-dropdown trigger="hover" :options="options">
				<div class="head-image">
					<n-avatar size="medium" :src="headimg" round />
					<span class="admin">Admin</span>
				</div>
			</n-dropdown>
		</n-space>
	</div>
</template>

<style>
	.panel-header {
		box-sizing: border-box;
		height: 60px;
		background-color: #ffffff;
		display: flex;
		align-items: center;
		padding-left: 15px;
	}
	.breadcrumb {
		height: 100%;
		display: flex;
		align-items: center;
	}
	.space {
		width: 100%;
	}
	.head-image {
		padding-left: 12px;
		padding-right: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.admin {
		font-weight: 500;
		font-size: 15px;
		padding-left: 8px;
		color: rgb(51, 54, 57);
	}
</style>
