<template>
  <div>
    <!-- <select onchange="categoryChange(this)">
      <option>걸그룹을 선택해주세요</option>
      <option value="a">블랙핑크</option>
      <option value="b">에프엑스</option>
      <option value="c">EXID</option>
    </select>

    <select id="good">
      <option>좋아하는 멤버를 선택해주세요</option>
    </select> -->

    <input type="text" name="" id="" v-on:keyup.enter="change" v-model="text" />
    <select>
      <option v-for="(list, idx) in list" :key="idx">{{ list }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'VueEndgameTest',

  data() {
    return {
      text: null,
      list: [
        'zzzzz',
        'gdsgsdg',
        'zsd',
        'gflweww',
        'xdfdfd',
        'fhfgh',
        'sssss',
        'aaaaazzz',
        'zzzsaz',
      ],
    };
  },

  mounted() {},

  methods: {
    change() {
      console.log(this.text);

      //   this.list = this.text.Contains(this.list);
      for (let i = 0; i < this.list.length; i++) {
        console.log(this.list[i]);
        if (this.list[i].Contains(this.text)) {
          console.log('일치함');
          // this.list.push(this.text.Contains(this.list));
        } else {
          console.log('일치없음');
        }
      }
    },
    changeProduct(event) {
      console.log(event.target.value);
      var arr = [1, 2, 3, 4, 5];
      for (var i = 0; i < arr.length; i++) {
        this.list.push(arr[i]);
      }
    },

    // categoryChange(e) {
    //   var good_a = ['지수', '제니', '로제', '리사'];
    //   var good_b = ['빅토리아', '엠버', '루나', '크리스탈'];
    //   var good_c = ['LE', '하니', '정화', '혜린', '솔지'];
    //   var target = document.getElementById('good');

    //   var d = null;
    //   var x = null;
    //   if (e.value == 'a') d = good_a;
    //   else if (e.value == 'b') d = good_b;
    //   else if (e.value == 'c') d = good_c;

    //   target.options.length = 0;

    //   for (x in d) {
    //     var opt = document.createElement('option');
    //     opt.value = d[x];
    //     opt.innerHTML = d[x];
    //     target.appendChild(opt);
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped></style>
