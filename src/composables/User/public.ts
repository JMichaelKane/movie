import { Ref } from "vue";
import { NInput } from "naive-ui";

// 编辑组件
const ShowOrEdit = defineComponent({
	// 设置组件属性
	props: {
		value: [String, Number],
		onUpdateValue: [Function, Array],
	},
	// setup函数
	setup(props: any) {
		const isEdit = ref(false); // 设置编辑状态
		const inputRef = ref<null | HTMLElement>(null); // 获取到编辑元素
		const inputValue = ref(props.value); // 编辑元素绑定
		// 点击事件触发编辑开启
		function handleOnClick() {
			isEdit.value = true;
			nextTick(() => {
				(inputRef as Ref<HTMLElement>).value.focus();
			});
		}
		// 失去焦点，用户离开输入框
		function handleChange() {
			props.onUpdateValue(inputValue.value);
			isEdit.value = false;
		}
		return () =>
			h(
				"div",
				{
					onClick: handleOnClick,
				},
				isEdit.value
					? h(NInput, {
							ref: inputRef,
							value: inputValue.value,
							size: "small",
							onUpdateValue: (v) => {
								inputValue.value = v;
							},
							onChange: handleChange,
							onBlur: handleChange,
					  })
					: props.value
			);
	},
});

interface Category {
	id: number;
	name: string;
	classNum: number;
	movieNum: number;
}

interface Movie {
	id: number;
	name: string;
	description: string;
	duration: string;
	sourceID: number;
	classID: number;
}

interface Source {
	id: number;
	name: string;
	url: string;
	complete: boolean;
}

export { ShowOrEdit };
export type { Category, Movie, Source };