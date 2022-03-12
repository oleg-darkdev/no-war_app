<script>
  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
  } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';
  import Button, { Group, GroupItem, Label, Icon } from '@smui/button';
  import Menu from '@smui/menu';
  import List, { Item, Graphic, Separator, Text, Subheader  } from '@smui/list';
  
  let clicked = 0;
  let menu;
  let helpMenu, language = '';
  
  function translate(language) {
		// return translateText = text.en;
	}

  $: selectedLanguage = language;
  $: translateText = translate(selectedLanguage);

  // export let selectedLanguage;
</script>


<!-- 270px -->
<TopAppBar style="background-color: #fff; z-index: 3; min-width: 340px; " variant="standard">
  <Row>
    <Section style="margin-left: 10px;">
      <!-- <IconButton class="material-icons" on:click={() => (open = !open)}>menu</IconButton> -->
      <Title>🇺🇦 #nowar</Title>
    <!-- <Fab color="secondary" on:click={() => (open = !open)} mini>
      <Icon class="material-icons">menu</Icon>
    </Fab> -->
    <!-- <Button color="secondary" variant="raised" on:click={() => (open = !open)}>
      <Icon class="material-icons">menu</Icon>
      <Label style="font: 28px 'grafitty';">MENU</Label>
    </Button> -->
    </Section>
    <Section align="end" style="padding-right: 25px;"toolbar>
      
      <div class="btns">
          <Group >
            <Button color="secondary" style="background-color: #191B1B; color: #fff;" on:click={() => menu.setOpen(true)} variant="raised"
              ><Label>{language ? language: 'EN 🇺🇸'}</Label></Button
            >
            <div use:GroupItem>
              <Button
                on:click={() => menu.setOpen(true)}
                variant="outlined"
                color="secondary"
                style="padding: 0; min-width: 36px;"
              >
                <Icon class="material-icons" style="margin: 0;">arrow_drop_down</Icon>
              </Button>
              <Menu style="background-color: #191B1B; color: #fff;" bind:this={menu} anchorCorner="TOP_LEFT">
                <List style="background-color: #191B1B;">
                  <Item style="color: #fff; background-color: #191B1B;" on:SMUI:action={() =>language = 'RU 🇷🇺'}><Text>RU 🇷🇺</Text></Item>
                  <Item style="color: #fff;background-color: #191B1B;" on:SMUI:action={() =>language = 'BY 🇧🇾'}><Text>BY 🇧🇾</Text></Item>
                  <Item style="color: #fff;background-color: #191B1B;" on:SMUI:action={() =>language = 'EN 🇺🇸'}><Text>EN 🇺🇸</Text></Item>
                  <Separator />
                  <Item style="color: #fff;background-color: #191B1B;" on:SMUI:action={() =>language = 'PL 🇵🇱'}><Text>PL 🇵🇱</Text></Item>
                </List>
              </Menu>
            </div>
          </Group>
        </div>
    </Section>
  </Row>
</TopAppBar>
 

 <style>

 
  * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }

  </style>