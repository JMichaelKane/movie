<script setup lang="ts"></script>

<template>
	<n-card size="small">
		<n-grid cols="9 l:10" item-responsive responsive="screen">
			<n-grid-item span="5 l:4" offset="0 l:2">
				<Class></Class>
			</n-grid-item>
			<n-grid-item span="4 l:2">
				<Searcher></Searcher>
			</n-grid-item>
		</n-grid>
	</n-card>
</template>

<style>
	.header {
		padding: 0.625rem 0;
	}
</style>
