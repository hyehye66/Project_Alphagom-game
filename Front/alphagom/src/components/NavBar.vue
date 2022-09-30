<template>
  <div class="navBar">
    <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
      sidebar
      <div class="logo">
        <img src="@/assets/image/알파곰_표정_기본.png" alt="말해봐요 알파곰" /> 
      </div>

      <div class="menu-toggle-wrap">
        <button
          class="menu-toggle"
          type="button"
          style="background-color: transparent; border: 0; outline: 0;"
          @click="ToggleMenu">
          <img src="@/assets/bars-3.svg" />
        </button>
      </div>

      <!-- <h3>Menu</h3> -->
      <!-- <div class="menu"> -->
        <!-- <router-link to="/" class="button">
          <HomeIcon class="h-6 w-6 text-blue-500 material-icons" />
          <span class="text">처음으로</span>
        </router-link>
        <router-link to="/map" class="button">
          <MapIcon class="h-6 w-6 text-blue-500 material-icons" />
          <span class="text">탐험하기</span>
        </router-link>
        <router-link to="/myPage" class="button">
          <UserIcon class="h-6 w-6 text-blue-500 material-icons" />
          <span class="text">내 정보</span>
        </router-link>
        <router-link to="/setting" class="button">
          <Cog6ToothIcon class="h-6 w-6 text-blue-500 material-icons" />
          <span class="text">설정하기</span>
        </router-link> -->
        <!-- <router-link to="/logout" class="button">
          <span class="material-icons">email</span>
          <span class="text">로그아웃</span>
        </router-link> -->
      <!-- </div> -->
    </aside>
  </div>
</template>

<script>
import { HomeIcon, MapIcon, UserIcon, Cog6ToothIcon, Bars3Icon } from '@heroicons/vue/24/outline'

export default {
  components: { HomeIcon, MapIcon, UserIcon, Cog6ToothIcon, Bars3Icon }
}
</script>

<script setup>
import { ref } from 'vue'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style lang="scss" scoped>
aside {
  position: absolute;
  z-index: 99;
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;
  margin: 0px;

  background-color: cadetblue;
  color: beige;

  transition: 0.2s ease-out;

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }

  // 바 접힘
  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-out;
  }

  // 바 열림
  &.is_expanded {
    widows: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;
    }
  }

  @media (max-width: 926px) {
    position: absolute;
    z-index: 99;
    
  }
}
// aside {
// 	display: flex;
// 	flex-direction: column;
// 	background-color: green;
// 	color: var(--light);
// 	// width: calc(50px);
//   width: 40px;
// 	overflow: hidden;
// 	min-height: 100vh;
// 	padding: 1rem;
// 	transition: 0.2s ease-in-out;
//   align-items: center;
// 	.flex {
// 		flex: 1 1 0%;
// 	}
// 	.logo {
// 		// margin-bottom: 1rem;
// 		img {
// 			width: 20px;
// 		}
// 	}
// 	.menu-toggle-wrap {
// 		display: flex;
// 		justify-content: flex-end;
// 		// margin-bottom: 1em;
// 		position: relative;
// 		top: 0;
// 		transition: 0.4s ease-in-out;
// 		.menu-toggle {
// 			transition: 0.4s ease-in-out;
// 			.material-icons {
// 				font-size: 12px;
// 				color: var(--light);
// 				transition: 0.2s ease-out;
// 			}
			
// 			&:hover {
// 				.material-icons {
// 					color: var(--primary);
// 					transform: translateX(0.5rem);
// 				}
// 			}
// 		}
// 	}
// 	h3, .button .text {
// 		opacity: 0;
// 		transition: opacity 0.3s ease-in-out;
// 	}
// 	h3 {
// 		color: var(--grey);
// 		font-size: 10px;
// 		// margin-bottom: 0.5rem;
// 		text-transform: uppercase;
// 	}
// 	.menu {
// 		margin: 0 -1rem;
//     align-items: centers;
// 		.button {
// 			display: flex;
// 			align-items: center;
// 			text-decoration: none;
// 			transition: 0.2s ease-in-out;
// 			padding: 0px 0px;
//       background-color: pink;
// 			.material-icons {
// 				font-size: 12px;
// 				color: var(--light);
// 				transition: 0.2s ease-in-out;
// 			}
// 			.text {
// 				color: var(--light);
// 				transition: 0.2s ease-in-out;
//         font-size: 12px;
// 			}
// 			&:hover {
// 				background-color: var(--dark-alt);
// 				.material-icons, .text {
// 					color: var(--primary);
// 				}
// 			}
// 			&.router-link-exact-active {
// 				background-color: var(--dark-alt);
// 				border-right: 5px solid var(--primary);
// 				.material-icons, .text {
// 					color: var(--primary);
// 				}
// 			}
// 		}
// 	}
// 	&.is-expanded {
// 		// width: var(--sidebar-width);
//     width: 100px;
// 		.menu-toggle-wrap {
// 			// top: -3rems;
			
// 			.menu-toggle {
// 				transform: rotate(-180deg);
// 			}
// 		}
// 		h3, .button .text {
// 			opacity: 1;
// 		}
// 		.button {
//       background-color: palevioletred;
// 			.material-icons {
// 				margin-right: 10px;
//         width: 20px;
// 			}
// 		}
// 		.footer {
// 			opacity: 0;
// 		}
// 	}
// 	@media (max-width: 926px) {
// 		position: absolute;
// 		z-index: 99;
// 	}
// }
</style>