<script setup lang="ts"></script>

<template>
	<n-list-item>
		<template #prefix>
			<n-skeleton height="148px" width="100px" />
		</template>
		<n-thing class="6666">
			<n-ellipsis :line-clamp="1" :tooltip="false">
				<n-skeleton height="24px" width="150px" round />
			</n-ellipsis>
			<n-space>
				<n-ellipsis :line-clamp="1" :tooltip="false">
					<n-skeleton height="18px" width="180px" round />
				</n-ellipsis>
			</n-space>
			<n-space> <div style="height: 5px; width: 100px"></div> </n-space>
			<n-skeleton height="20px" width="100%" style="max-width: 100%" round />
			<n-space> <div style="height: 7px; width: 100px"></div> </n-space>
			<n-skeleton height="20px" width="100%" round />
			<n-space> <div style="height: 7px; width: 100px"></div> </n-space>
			<n-skeleton height="20px" width="100%" round />
		</n-thing>
	</n-list-item>
</template>

<style></style>
