import { ref } from "vue";

import { Category, Source, Movie, Class } from "./public";

const LogInEd = ref<boolean>(false);

const sources = ref<Source[]>([]); // 采集源

const categories = ref<Category[]>([]); // 自建分类

const movies = ref<Movie[]>([]); //影片

const moviesNum = ref<number>(0); //影片数目

const sourceDetail: Map<number, Class[]> = new Map(); // 采集源详细信息

export { sources, moviesNum, categories, movies, sourceDetail, LogInEd };
