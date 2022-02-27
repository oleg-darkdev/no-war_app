<script>
import Card, {
  Content,
  PrimaryAction,
  Media,
  MediaContent,
} from '@smui/card';

import socialIcons from '../data/social/socialTq';
</script>


<footer style="background-color: #4F72B6; height: 600px;">


<div  style="display: flex; flex-direction: row; flex-wrap: wrap;">
    <div  style="display: flex; flex-direction: column;"> 
      <h2 style="font: 26px 'grafitty';">Follow Us</h2>
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

</style>
