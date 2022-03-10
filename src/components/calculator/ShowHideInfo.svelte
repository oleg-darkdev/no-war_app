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
</script>

<Card style="margin: 5px 0; width: 380px;">
    <Content style="color: #fff;"> {showCalculator ? 'Hide data':'Show data'}</Content>
    <Actions fullBleed>
    <Button on:click={() => showCalculator = !showCalculator}>
        <Label>Lorem impsum</Label>
        <i class="material-icons" aria-hidden="true">arrow_forward</i>
    </Button>
    </Actions>
</Card>
