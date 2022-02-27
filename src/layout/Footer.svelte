<script>
import Line from '../components/footer/Line.svelte';
import PolicyMenu from '../components/footer/PolicyMenu.svelte';
// import Paper, {Title, Subtitle, Content} from '@smui/paper/dist';
import gamesData from '../data/gamesData';
import SvgLine from "./BlackSvgLine.svelte";
import Card, {
  Content,
  PrimaryAction,
  Media,
  MediaContent,
} from '@smui/card';


import socialIcons from '../data/social/socialTq';

let merchPolicy,
refundPolicy,
privacyPolicy,
shippingPolicy,
termsOfService;
</script>


<footer style="background-color: #000; height: auto;">

<!-- <SvgLine /> -->
<!-- <Paper
			color="primary"
			style=" max-width: 760px;  margin: 25px 5%; background-color: #fff;"
			class="paper-demo"
		>
  
			<Content> -->
<div  style="display: flex; flex-direction: row; flex-wrap: wrap;
">
 <!-- <ul >

      <li>
        <a href=".">FAQs</a>
      </li>
			      <li>
        <a href=".">Resources</a>
      </li>
			      <li>
        <a href=".">Contact</a>
      </li>
      
			      <li>
        <a href=".">Store Locator</a>
      </li>
			      <li>
        <a href=".">Careers</a>
      </li>
    </ul> -->

     <ul >
      <li>
        <a style="color: #fff;" href=".">Boardgames</a>
      </li>
       {#each gamesData.all as game}
        <li>
          <a style="color: #fff;" href={`games/${game.promo.id}`}>{game.promo.shortName}</a>
        </li>
      {/each}
    </ul>

    <div  style="display: flex; flex-direction: column;"> 
      <h2 style="font: 26px 'grafitty';">Follow ME</h2>
      <div style="display: flex; flex-direction: row; align-content: center; width: 200px; flex-wrap: wrap;">
        {#each Object.values(socialIcons) as social}
          <Card style="width: 40px; height: 40px; margin: 5px;">
            <PrimaryAction on:click={() => location.href = social.link}>
              <Media style="background-image: url('{social.img}');" class="card-media-square" aspectRatio="square">
            </Media>
            </PrimaryAction>
          </Card>
        {/each}
      </div>
    </div>

</div>
		<!-- </Content>
      
	</Paper> -->
		<!-- <div class="shop">
<h3 > SHOP</h3>
<div class="logos-column">
	<img src="" style="height: 30px; width: 90px;"  alt="">
	   <ImageList style="width: 600px;" class="my-image-list-standard">
      {#each Array(4) as _unused, i}
        <Item style="margin-right: 10px;">
          <ImageAspectContainer>
            <Image style="height: 40px;"
              src="https://place-hold.it/190x190&text=logo"
              alt="Image {i + 1}"
            />
          </ImageAspectContainer>
          <Supporting>
            <Label>Image {i + 1}</Label>
          </Supporting>
        </Item>
      {/each}
    </ImageList>
</div>
</div> -->
   <PolicyMenu bind:merchPolicy  bind:refundPolicy bind:shippingPolicy bind:privacyPolicy bind:termsOfService/>

	<Line bind:merchPolicy  bind:refundPolicy bind:shippingPolicy bind:privacyPolicy bind:termsOfService/>
</footer>

<style>
	footer {
			display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		align-items: center;
    height: 350px;
	}
ul {
    margin: 0;
    padding: 0;
  }

ul::after {
    content: "";
    display: block;
    clear: both;
  }
  li {
list-style: none;
margin: 0;
  }
  a, .shop {
    text-decoration: none;
    padding: 0.1em 0.5em;
    display: block;
    color: #000;
    font: 36px 'grafitty';
  }

/* .shop {
	display: flex;
	flex-direction: column;

} */
</style>
