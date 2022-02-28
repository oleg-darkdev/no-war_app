<script>
  import { flip } from 'svelte/animate';
  import { onDestroy } from 'svelte';

  export let data;
//   export let imageWidth = 300;
//   export let imageSpacing = 20;
  export let speed = 500;
  export let controlColor= '#444';
  export let controlScale = '0.5';
  export let autoplay = false;
  export let autoplaySpeed = 5000;
  export let displayControls = true;
  let interval;


  const rotateLeft = e => {
    const transitioningImage = data[data.length - 1]
    document.getElementById(transitioningImage.id).style.opacity = 0;
    data = [data[data.length -1],...data.slice(0, data.length - 1)]
    setTimeout(() => (document.getElementById(transitioningImage.id).style.opacity = 1), speed);
  }

  const rotateRight = e => {
    const transitioningImage = data[0]
    document.getElementById(transitioningImage.id).style.opacity = 0;
    data = [...data.slice(1, data.length), data[0]]
    setTimeout(() => (document.getElementById(transitioningImage.id).style.opacity = 1), speed);
  }

  const startAutoPlay = () => {
    if(autoplay){
      interval = setInterval(rotateLeft, autoplaySpeed)
    }
  }

  const stopAutoPlay = () => {
    clearInterval(interval)
  }

  if(autoplay){
    startAutoPlay()
  }

  onDestroy(()=>{stopAutoPlay()})

</script>

<div id="carousel-container">
  <div id="carousel-images">
    {#each data as document (document.id)}
    <div style=''
    on:mouseover={stopAutoPlay}
        on:mouseout={startAutoPlay}
        animate:flip={{duration: speed}}>
        <a href={document.img} target=”_blank”> 
        <img style='width: 350px; margin: 0 15px; height: 350px; border-radius: 2%;'
            src={document.img}
            alt={document.id}
            id={document.id}
        />
        </a>
    </div>
    {/each}
  </div>
  {#if displayControls}
  <button id="left" on:click={rotateLeft}>
    <slot name="left-control">
        <svg width="39px" height="110px" id="svg8" transform={`scale(${controlScale})`}>
            <g id="layer1" transform="translate(-65.605611,-95.36949)">
            <path
            style={`fill:none;stroke:${controlColor};stroke-width:9.865;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`}
            d="m 99.785711,100.30199 -23.346628,37.07648 c -7.853858,12.81098 -7.88205,12.81098 0,24.78902 l 23.346628,37.94647"
            id="path1412" />
            </g>
        </svg>
    </slot>
  </button>
  <button id="right" on:click={rotateRight}>
    <slot name="right-control">
      <svg width="39px" height="110px" id="svg8" transform={`rotate(180) scale(${controlScale})`}>
        <g id="layer1" transform="translate(-65.605611,-95.36949)">
          <path
          style={`fill:none;stroke:${controlColor};stroke-width:9.865;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`}
          d="m 99.785711,100.30199 -23.346628,37.07648 c -7.853858,12.81098 -7.88205,12.81098 0,24.78902 l 23.346628,37.94647"
          id="path1412" />
        </g>
      </svg>
    </slot>
  </button>
  {/if}
</div>

<style>
  #carousel-container {
    width: 100%;
    /* margin-right: -100px; */
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }
  #carousel-images {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    -webkit-mask: linear-gradient(
      to right,
      transparent,
      black 40%,
      black 60%,
      transparent
    );
    mask: linear-gradient(
      to right,
      transparent,
      black 40%,
      black 60%,
      transparent
    );
  }

  button {
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   display: flex;
   align-items: center;
   justify-content: center;
   background: transparent;
   border: none;
 }

 button:focus {
   outline: auto;
 }

  #left {
    left: 10px;
  }

  #right {
    right: 10px;
  }

</style>
