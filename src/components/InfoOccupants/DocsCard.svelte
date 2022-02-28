<script>
	import Card, {
    Content,
    Media,
} from '@smui/card';
import Carousel from './Carousel.svelte'; 
import Button, { Label } from '@smui/button';

export let data;
</script>

<!-- {#each data as document} -->
    <!-- <Card>
        <Media class="card-media-16x9" aspectRatio="16x9" style="background-image: url({document.img});" />
        <Content style="color: #888;">{document.text}
         -->
<div style="max-width: 760px;  display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: center;
align-content: center;">
    <Card style="background-color: #4F72B6; width: 100%;" padded>
        <Content class="mdc-typography--body2" style="color: #fff">
          <h2 class="mdc-typography--headline6" style="margin: 0;">
            Инструкция
          </h2>
          1. Чтобы рассмотреть фотографию крупным планом, просто нажмите на неё.
          
          <p class="mdc-typography--body2" style="margin: 10px 0 0 0;">
            Если вы не нашли своего родственника, компьютерное зрение поможет найти его. Для этого необходимо оформить заявку. 
          </p>

        <Button color="secondary" on:click={() => location.href= ''} variant="raised">
            <Label>Оформить заявку</Label>
        </Button>
        </Content>
    </Card>
    <Carousel 
    {data}
    controlColor={'white'}
    controlScale={0.8}
    autoplay={true}
    autoplaySpeed={3000}
/>   
</div>
<!-- </Content>
    </Card> -->
<!-- {/each} -->

<style>
    .c {
        justify-content: center;
    }
</style>