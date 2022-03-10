<script>
import List, {
    Item,
    Graphic,
    Meta,
    Text,
    PrimaryText,
    SecondaryText,
  } from '@smui/list';
 import Card, {
    Content,
    PrimaryAction,
    Actions,
    ActionButtons,
    ActionIcons,
  } from '@smui/card';
  import Button, { Label } from '@smui/button';
  import Paper from '@smui/paper/dist';

  import ShowHideInfo from './calculator/ShowHideInfo.svelte';

 const warDays = [
     {
         date: '24.02.2022',
         name: 'Lorem impsum'
     },
       {
         date: '25.02.2022',
         name: 'Lorem impsum'
     },
       {
         date: '26.02.2022',
         name: 'Lorem impsum'
     },
       {
         date: '27.02.2022',
         name: 'Lorem impsum'
     },
       {
         date: '28.02.2022',
         name: 'Lorem impsum'
     },
       {
         date: '01.03.2022',
         name: 'Lorem impsum'
     },
       {
         date: '02.03.2022',
         name: 'Lorem impsum'
     },
       {
         date: '03.03.2022',
         name: 'Lorem impsum'
     },
       {
         date: '04.03.2022',
         name: 'Lorem impsum'
     },
       {
         date: '05.03.2022',
         name: 'Lorem impsum'
     },
       {
         date: '06.03.2022',
         name: 'Lorem impsum'
     },
       {
         date: '07.03.2022',
         name: 'Lorem impsum'
     },
       {
         date: '08.03.2022',
         name: 'Lorem impsum'
     },
       {
         date: '09.03.2022',
         name: 'Lorem impsum'
     },
       {
         date: '10.03.2022',
         name: 'Lorem impsum'
     },
       {
         date: '11.03.2022',
         name: 'Lorem impsum'
     },
       {
         date: '12.03.2022',
         name: 'Lorem impsum'
     },
       {
         date: '13.03.2022',
         name: 'Lorem impsum'
     },
       {
         date: '14.03.2022',
         name: 'Lorem impsum'
     },
     {
         date: '15.03.2022',
         name: 'Lorem impsum'
     },
     {
         date: '16.03.2022',
         name: 'Lorem impsum'
     },
     {
         date: '17.03.2022',
         name: 'Lorem impsum'
     },
     {
         date: '18.03.2022',
         name: 'Lorem impsum'
     },
     {
         date: '19.03.2022',
         name: 'Lorem impsum'
     },
     {
         date: '20.03.2022',
         name: 'Lorem impsum'
     },
     {
         date: '21.03.2022',
         name: 'Lorem impsum'
     },
     {
         date: '22.03.2022',
         name: 'Lorem impsum'
     },
     {
         date: '23.03.2022',
         name: 'Lorem impsum'
     },
     {
         date: '24.03.2022',
         name: 'Lorem impsum'
     },
     {
         date: '25.03.2022',
         name: 'Lorem impsum'
     },
     {
         date: '26.03.2022',
         name: 'Lorem impsum'
     },
     {
         date: '27.03.2022',
         name: 'Lorem impsum'
     },
    
 ];
 
 
let showCalculator = false; 

export let data;
</script>


<section style="width: 100%; height: auto; background-color: #F2DD31; min-height: 100px; ">
    <Paper color="primary" style="min-width: 400px; width: auto; margin: -50px 0 -50px 0; display: flex; justify-content: center; background-color: #1A1A1A;" >
      <Content >
        <ShowHideInfo bind:showCalculator />
   
        <div class="war-days-wrap">
            {#if showCalculator}
            {#each warDays as warDay}
                <Card style="margin: 5px 0;">
                <Content style="color: #fff;">{warDay.date}</Content>
                <Actions fullBleed>
                    <Button on:click={() => warDay.show = !warDay.show}>
                    <Label>show information for that day</Label>
                    <i class="material-icons" aria-hidden="true">arrow_forward</i>
                    </Button>
                </Actions>
                </Card>
                {#if warDay.show}
                    <List class="demo-list">
                        {#each data as loss}
                            <Item style="height: 100px;">
                                <Graphic style="background-image: url({loss.img});" />
                                <Text>
                                    <PrimaryText style="font: 26px 'impact';">{loss.number}</PrimaryText>
                                    <SecondaryText>{loss.type}</SecondaryText>
                                </Text>
                            </Item>
                        {/each}
                    </List>
                {/if}
            {/each}
             <ShowHideInfo bind:showCalculator />
            {/if}
            </div>
       </Content>
    </Paper>
</section >

<style>
    .war-days-wrap {
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;        
        max-width: 760px;
    }


    section {
        display: flex;
        justify-content: center;
    }
</style>
