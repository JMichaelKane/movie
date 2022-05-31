<script setup lang="ts">
	import { FlashOutline, Search } from "@vicons/ionicons5";
	import { ref } from "vue";
	import { useRouter } from "vue-router";
	const text = ref("");
	const router = useRouter();

	function goto() {
		if (text.value.trim() != "") {
			router.push({ name: "search", params: { keyword: text.value } });
		}
	}
</script>

<template>
	<n-input v-model:value="text" @keyup.enter="goto" round placeholder="搜索">
		<template #prefix>
			<n-icon :component="FlashOutline" />
		</template>
		<template #suffix>
			<n-button @click="goto" text>
				<n-icon :component="Search" />
			</n-button>
		</template>
	</n-input>
</template>

<style></style>
