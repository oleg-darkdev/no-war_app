<script>
import Card, {
    Content,
    PrimaryAction,
    Actions,
    ActionButtons,
    ActionIcons,
  } from '@smui/card';
import Button, { Label } from '@smui/button';

export let showCalculator;
export let warDaysFullArray;
export let warDays;
</script>
<!--  {showCalculator ? 'Hide data':'Show data'} -->
<Card style="margin: 5px 0; width: 100%;">
    <Content style="color: #fff; background-color: #F2DD31;">Information on the losses of the Russian army with a chronology</Content>
    <Actions fullBleed>
    <Button on:click={() => {
        showCalculator = !showCalculator;
        warDays = warDaysFullArray;
    }}>
        <Label>{!showCalculator ? 'Show chronology': 'Hide chronology'}</Label>
        <i class="material-icons" aria-hidden="true">{!showCalculator ? 'expand_more': 'expand_less'}</i>
    </Button>
    </Actions>
</Card>
