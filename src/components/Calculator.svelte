<script>
import List, {
    Item,
    Graphic,
    Meta,
    Text,
    PrimaryText,
    SecondaryText,
  } from '@smui/list';


export let data;
</script>

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