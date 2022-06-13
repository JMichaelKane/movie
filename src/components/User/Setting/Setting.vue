<script setup lang="ts">
	import { useNotification } from "naive-ui";
	import { UpdateAccount, UpdatePassword } from "../../../composables/User/api";
	const account = ref<string>("");
	const password = ref<string>("");
	const notification = useNotification(); // 通知
	function updateAccount() {
		if (account.value != "") {
			UpdateAccount(account.value).then(() => {
				notification["success"]({
					duration: 2000,
					content: "更新账户",
					meta: "操作成功",
				});
			});
		}
	}
	function updatePassword() {
		if (password.value != "") {
			UpdatePassword(password.value).then(() => {
				notification["success"]({
					duration: 2000,
					content: "更新密码",
					meta: "操作成功",
				});
			});
		}
	}
</script>

<template>
	<div style="height: calc(100vh - 60px)">
		<n-card title="系统设置" size="small">
			<n-card :bordered="false" title="修改用户:" size="small">
				<n-space>
					<n-input v-model:value="account" type="text" placeholder="请输入用户名" />
					<n-button @click="updateAccount()">更新</n-button>
				</n-space>
			</n-card>
			<n-card :bordered="false" title="修改密码:" size="small">
				<n-space>
					<n-input v-model:value="password" type="text" placeholder="请输入密码" />
					<n-button @click="updatePassword()">更新</n-button>
				</n-space>
			</n-card>
		</n-card>
	</div>
</template>

<style></style>
