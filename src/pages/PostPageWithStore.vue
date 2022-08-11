<!-- PostPage.vue - страница с постами -->

<template>
  <div>
    <h1>Страница с постами</h1>

  <my-input
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="Поиск...."
      v-focus
    />


    <div class="app__buttons">
      <my-button class="button__showdialog" @click="showDialog"> Создать пост </my-button>
  
      <my-select
        :model-value="setSelectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      />

    </div>

    <my-button class="button__showdialog" @click="fetchPosts"> Получить посты </my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list
      @remove="removePost"
      :posts="sortedAndSearchPosts"
      v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
/* импортирование компонентов */
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import MyButton from "@/components/UI/MyButton";
/* import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput"; */

/* импорт библиотеки для хапросов с сервера axios*/
/* import axios from "axios";
 *//* импорт функции */
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  /* регистрация компонентов в поле components */
  components: {
    MyButton,
   /*  MySelect,
    MyInput, */
    PostList,
    PostForm,
	/*  axios */
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
		   setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),
  },
  //хук mounted в нем реализуем динамическую подгрузку постов
  mounted() {    this.fetchPosts();
},
  //сортировка постов с помощью computed
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchPosts: "post/sortedAndSearchPosts",
    }),
  },
  /* сортировка watch
	watch: {
		selectedSort(newValue) {
			this.posts.sort((post1, post2) => {
				return post1[newValue]?.localeCompare(post2[newValue])
			})
		},
	} */
};
</script>

<style>
.app__buttons {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid #000;
  padding: 10px;
}

.current-page {
  border: 2px solid teal;
}

.observer {
  height: 30px;
  background-color: green;
}
</style>
