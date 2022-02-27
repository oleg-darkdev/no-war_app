<script>
    import List, {
    Group,
    Item,
    Subheader,
    Text
} from '@smui/list';
import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
} from '@smui/card';
 import Fab, { Icon } from '@smui/fab';
 import {
    fade
} from 'svelte/transition';


let showFaqList = false;

export let faqData;
export let text;
</script>


<Subheader on:click={() => showFaqList = !showFaqList} style="">
    <div class="wrap-question-type">
        <h2 style="font: 28px 'grafitty'; margin: 0; color: #fff;">{text}</h2>
        <Fab  mini>
            <Icon class="material-icons">{showFaqList ? 'expand_less':'expand_more'}</Icon>
        </Fab>
    </div>
</Subheader>

{#if showFaqList}
    <List style="max-width: 760px; width: 100%; height: auto;">
        {#each faqData  as faq }
        <Item style="color: #fff;" on:click={() => faq.showAnswer = !faq.showAnswer}><Text style="color: #fff">{faq.question}</Text></Item>
        {#if faq.showAnswer}
        <div transition:fade="{{delay: 250, duration: 300}}" class='answer'>
            <p class=" mdc-typography--body" >		{faq.answer}
            </p></div>
        {/if}
        {/each}
    </List>
{/if}
<style>
    .wrap-question-type {
        display: flex;
          align-content: center;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap-reverse;
    }
</style>