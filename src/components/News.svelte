<script>
 import Card, {
    Content,
    PrimaryAction,
    Actions,
    ActionButtons,
    ActionIcons,
  } from '@smui/card';
  import Button, { Label } from '@smui/button';
  import IconButton, { Icon } from '@smui/icon-button';

const popularNews = [
    {
        date: '24.02.2022',
        name: 'Lorem impsum',
        img: '',
        instagram: '',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }, 
    {
        date: '24.02.2022',
        name: 'Lorem impsum',
        img: '',
        instagram: '',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];

const newsArray = [
      {
         date: '24.02.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
       {
         date: '25.02.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
       {
         date: '26.02.2022',
         name: 'Lorem impsum'
     },
       {
         date: '27.02.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
       {
         date: '28.02.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
       {
         date: '01.03.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
       {
         date: '02.03.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
       {
         date: '03.03.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
       {
         date: '04.03.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
       {
         date: '05.03.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
       {
         date: '06.03.2022',
         name: 'Lorem impsum'
     },
       {
         date: '07.03.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
       {
         date: '08.03.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
       {
         date: '09.03.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
       {
         date: '10.03.2022',
         name: 'Lorem impsum'
     },
       {
         date: '11.03.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
       {
         date: '12.03.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
       {
         date: '13.03.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
       {
         date: '14.03.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
     {
         date: '15.03.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
     {
         date: '16.03.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
     {
         date: '17.03.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
     {
         date: '18.03.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
     {
         date: '19.03.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
     {
         date: '20.03.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
     {
         date: '21.03.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
     {
         date: '22.03.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
     {
         date: '23.03.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
     {
         date: '24.03.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
     {
         date: '25.03.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
     {
         date: '26.03.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
     {
         date: '27.03.2022',
         name: 'Lorem impsum',
         img: '',
         shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
         popularNews,
     },
    
 ];


 
</script>


{#each newsArray as news}
    <Card style="max-width: 1024px; width: 100%; min-width:400px; margin: 25px 0;">
        <Content style=" background-image: url({news.img}); height: 300px;">
        </Content>
        <Actions fullBleed>
        <Button on:click={() => news.showAllNews = !news.showAllNews}>
            <Label>{news.date}</Label>
            <i class="material-icons" aria-hidden="true">arrow_forward</i>
        </Button>
        </Actions>
    </Card>
{/each}


<style>
    css {
    }
</style>