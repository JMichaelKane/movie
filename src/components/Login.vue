<script setup lang="ts">
	import QS from "qs";
	import { base_url } from "../composables/base";
	const loading = ref<boolean>(false);
	const account = ref<string>("");
	const password = ref<string>("");
	function handleClick() {
		loading.value = true;
		// console.log(account.value, password.value);
		fetch(base_url + "user/login", {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: QS.stringify({
				account: account.value,
				password: password.value,
			}),
		});
	}
</script>

<template>
	<n-grid cols="1 l:5" responsive="screen">
		<n-grid-item span="1" offset="0 l:2">
			<n-space class="card" justify="center" vertical>
				<n-card title="登录">
					<n-space vertical>
						<div class="form">
							<n-input
								v-model:value="account"
								type="text"
								size="large"
								placeholder="请输入用户名"
							/>
						</div>
						<div>
							<n-input
								v-model:value="password"
								type="password"
								size="large"
								show-password-on="mousedown"
								placeholder="请输入密码"
								:maxlength="8"
							/>
						</div>
						<div class="form">
							<n-space justify="space-between">
								<n-checkbox size="large" label="记住密码" />
								<n-button text> 忘记密码 </n-button>
							</n-space>
						</div>
						<div>
							<n-button
								class="button-block"
								type="primary"
								:loading="loading"
								@click="handleClick"
							>
								登录
							</n-button>
						</div>
					</n-space>
				</n-card>
			</n-space>
		</n-grid-item>
	</n-grid>
</template>

<style>
	.card {
		height: 100vh;
	}
	.form {
		margin-bottom: 10px;
	}
	.button-block {
		width: 100%;
	}
</style>
