<template>
  <div>
    <LikeHeader>
      <template>
        <h1>トータルのいいね数</h1>
      </template>
      <template v-slot:number>
        <p>{{ number }}</p>
      </template>
    </LikeHeader>
    <!-- <LikeNumber v-bind:total-number="number" v-on:my-click="$event"></LikeNumber> -->

    <button v-on:click="currentComponent = 'Home'">Home</button>
    <button v-on:click="currentComponent = 'About'">About</button>
    <!-- 動的コンポーネントの情報をキャッシュする -->
    <keep-alive>
      <!-- 動的コンポーネント -->
      <component v-bind:is="currentComponent"></component>
    </keep-alive>

    <div style="padding: 0 3rem; line-height: .2;">
      <h2>イベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input type="text" id="title" v-model="eventData.title">
      <pre>{{ eventData.title }}</pre>
      <label for="maxNumber">最大人数</label>
      <input type="number" id="maxNumber" v-model.number="eventData.maxNumber">
      <p>{{ eventData.maxNumber }}</p>
      <label for="host">主催者</label>
      <input type="text" id="host" v-model.trim="eventData.host">
      <p>{{ eventData.host }}</p>
      <label for="detail">詳細</label>
      <textarea name="" id="datail" cols="30" rows="3" v-model="eventData.detail"></textarea>
      <p style="white-space: pre">{{ eventData.detail }}</p>
      <label for="isPrivate">非公開</label>
      <input type="checkbox" name="" id="isPrivate" v-model="eventData.isPrivate">
      <p>{{ eventData.isPrivate }}</p>
      <p>参加条件</p>
      <label for="10">10代</label>
      <input type="checkbox" value="10代" id="10" v-model="eventData.target">
      <label for="20">20代</label>
      <input type="checkbox" value="20代" id="20" v-model="eventData.target">
      <label for="30">30代</label>
      <input type="checkbox" value="30代" id="30" v-model="eventData.target">
      <p>{{ eventData.target }}</p>
      <p>参加費</p>
      <label for="free">無料</label>
      <input type="radio" value="無料" id="free" v-model="eventData.price">
      <label for="pay">有料</label>
      <input type="radio" value="有料" id="pay" v-model="eventData.price">
      <p></p>
      <select v-model="eventData.location">
        <option v-for="location in locations" v-bind:key="location">
          {{location}}
        </option>
      </select>
      <sapa>{{ eventData.location }}</sapa>
    
    
    </div>
  </div>
</template>

<script>
//コンポーネントのローカル登録
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";

export default {
  data: function() {
    return {
      number: 18,
      //動的コンポーネントの部品
      currentComponent: "Home",

      //フォーム イベントデータ
      locations: ["東京","大阪","名古屋"],
      eventData: {
        title: "",
        maxNumber: 0,
        host: "",
        datail: ",",
        isPrivate: false,
        target: [],
        price: "無料",
        location: "東京",
      }
    };
  },

  //コンポーネントのローカル登録
  components: {
    //keyとvalueが同一の時は短縮できる ES6の記法
    LikeHeader,
    About,
    Home,
  }
}
</script>
<style>
</style>