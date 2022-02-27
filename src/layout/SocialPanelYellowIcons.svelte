<script>
import Card, {Content, PrimaryAction, Media} from '@smui/card';
import Paper, { Title, Subtitle } from '@smui/paper';
import socialData from '../data/social/socialYellow';

export let title = ''
</script>

  <Paper style="margin: 0 auto; width: 80%; height: auto; margin-bottom: 25px; border: 2px solid #F2DD31; background-color: #191B1B;" class="paper-demo">
	  <!--  👇 -->
    <Title style="font: 60px 'impact'; text-align: center; color: #fff;">{title + ` 💙💛`}</Title> 
    <!-- <Subtitle>This is a sheet of paper.</Subtitle> -->
    <Content style="display: flex; flex-direction: row; align-content: center; width: 100%; min-width: 300px; flex-wrap: wrap;">
      {#each Object.values(socialData) as social}
          <Card style="width: 70px; margin: 5px;">
            <PrimaryAction on:click={() => location.href = social.link}>
            <Media class="card-media-square" style="background-image: url('{social.img}');" aspectRatio="square">
            </Media>
            </PrimaryAction>
          </Card>
        {/each}
		</Content>
  </Paper>

