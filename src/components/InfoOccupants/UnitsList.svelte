<script>
import Button, { Label } from '@smui/button';
import List, {
    Item,
    Graphic,
    Meta,
    Text,
    PrimaryText,
    SecondaryText,
  } from '@smui/list';

let showFullList = false;

export let data;
</script>		
        
        
<List class="demo-list">
    <Button color="secondary" on:click={() => showFullList = !showFullList} variant="unelevated">
        <Label>{showFullList ? 'Скрыть':'Показать'} полный список</Label>
    </Button>

    {#each showFullList ? data: data.slice(0, 6) as unit}
        <Item style="height: 70px;">
            <Text>
                <PrimaryText style="color: #1A1A1A;">Номер: {unit.name}</PrimaryText>
                <SecondaryText style="color: #1A1A1A;">Адрес: {unit.addres ? unit.addres: 'Уточняется'}</SecondaryText>
            </Text>
        </Item>
    {/each}

    <Button color="secondary" on:click={() => showFullList = !showFullList} variant="unelevated">
        <Label>{showFullList ? 'Скрыть':'Показать'} полный список</Label>
    </Button>
    
</List>