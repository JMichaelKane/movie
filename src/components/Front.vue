<script setup lang="ts"></script>

<template>
	<Header></Header>
	<n-grid cols=" 6 l:10 " item-responsive responsive="screen">
		<n-grid-item span="6" offset="0 l:2">
			<router-view />
		</n-grid-item>
	</n-grid>
	<n-back-top :right="100" />
	<div class="no"></div>
</template>

<style>
	.no {
		width: 100%;
		height: 50px;
	}
</style>
