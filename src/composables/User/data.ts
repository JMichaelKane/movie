import { ref } from "vue";

import { Category, Source, Movie } from "./public";

const LogInEd = ref<boolean>(false);

const sources = ref<Source[]>([]); // 采集源

const categories = ref<Category[]>([]); // 自建分类

const movies = ref<Movie[]>([]); //影片

const moviesNum = ref<number>(0);

export { sources, moviesNum, categories, movies, LogInEd };
