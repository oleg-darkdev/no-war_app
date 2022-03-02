<script>
 import Card, {
    Content,
    PrimaryAction,
    Actions,
    ActionButtons,
    ActionIcons,
  } from '@smui/card';


export let color;
</script>

<Card style="width: 80%; margin: 10px 0 25px 0;">
    <PrimaryAction style="min-height: 180px; height: auto;   color:black; background-color: #{color}; " on:click={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfWX3zNczcG4zhRSyahUWvLUTsEEoxysnXjSdVIdulK-f0nxw/viewform?usp=sf_link', "_blank")} padded>
        <h3 style="font: 54px 'impact'; margin: 0; text-align:center;">👉 Форма поиска пропавших</h3>
    </PrimaryAction>
</Card>