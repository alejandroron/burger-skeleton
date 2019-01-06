//<div v-bind:class="{ active: isActive }"></div>
//위 구문은 active 클래스의 존재 여부가 데이터 속성 isActive 의 참 속성에 의해 결정되는 것을 의미합니다.
<template>

<div class="bars">
<Navbar2 :backAddressProperty='"./#/OrderPage"' :backTextProperty='"MAIN PAGE"' :titleProperty='"CREATE YOUR OWN BURGER"'/>
<ul class="cd-accordion-menu">
    <li><item :model="treedata"></item>
    </li>
    <li><item :model="meatdata"></item>
    </li>
    <li><item :model="ingredientsdata"></item>
    </li>
     <li><item :model="saucesdata"></item>
    </li>
  </ul>
</div>

</template>

<script>
import item from './item.vue';
import Navbar2 from '@/components/Navbar2.vue';
export default{
  name: 'Bars',
  props: {
    treedata: Object,
    meatdata: Object,
    ingredientsdata: Object,
    saucesdata: Object
    
  },
  components: {item, Navbar2},
  
}

</script>

<style>
.bars{
display: flex;
  justify-content: center;
  align-items: center;
}
</style>
