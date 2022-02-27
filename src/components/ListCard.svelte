<script>
import Card, {
    PrimaryAction,
  } from '@smui/card';
 import Fab, { Icon } from '@smui/fab';

export let text;
export let showSection;
</script>


<Card style="margin: 10px; width: 100%;">
    <PrimaryAction on:click={() => showSection = !showSection} padded>
     <div class="list-element">
        <h3 style="font: 36px 'impact'; margin: 0;">{text}</h3>
        <Fab style="margin: 0 15px; background-color: #4F72B6; ">
            <Icon class="material-icons"> {showSection ? 'expand_less' : 'expand_more'}</Icon>
        </Fab>
     </div>
    </PrimaryAction>
</Card>


<style>
    .list-element {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
    }
    
</style>