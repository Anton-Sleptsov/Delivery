import { goodsArray } from '@/constants/goods'
import { restsArray } from '@/constants/rests'
import { reactive } from 'vue'

export const store = reactive({
  isOpen: false,
  rests: restsArray,
  goods: goodsArray,
  toggleModal(value){
    this.isOpen = value;
  }
})