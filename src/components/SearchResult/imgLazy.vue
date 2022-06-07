<script setup lang="ts">
	const props = defineProps<{
		imgUrl: string;
	}>();

	const s = ref(false);
	const imgSrc = ref();

	fetch(props.imgUrl, {
		method: "GET",
		mode: "cors",
	})
		.then((res) => {
			// console.log(res);
			if (res.ok) {
				return res.blob();
			}
			throw new Error("Network response was not ok." + res.statusText);
		})
		.then((blob) => {
			var objectURL = URL.createObjectURL(blob);
			// console.log(objectURL);
			imgSrc.value = objectURL;
			s.value = true;
		})
		.catch((err) => {
			console.log("There has been a problem with your fetch operation: ", err);
		});
</script>

<template>
	<template v-if="s">
		<n-image class="user-drag" width="100" :src="imgSrc" preview-disabled />
	</template>
	<template v-else>
		<n-card :bordered="false" style="width: 100px">
			<n-spin size="large" />
		</n-card>
	</template>
</template>

<style></style>
