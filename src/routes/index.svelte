<script>
	import Card, {
    Content,
    Media,
} from '@smui/card';
import List, {
    Item,
    Graphic,
    Meta,
    Text,
    PrimaryText,
    SecondaryText,
  } from '@smui/list';

// Layout
import FirstSection from '../layout/FirstSection.svelte';
import BlueSection from '../layout/BlueSection.svelte';
import InfoSection from '../layout/InfoSection.svelte';
import YellowSection from '../layout/YellowSection.svelte';
import CalculatorSection from '../layout/CalculatorSection.svelte';
import SocialPanelYellowIcons from '../layout/SocialPanelYellowIcons.svelte';
// Components
import ListCard from '../components/ListCard.svelte';
import FindForm from '../components/FindForm.svelte';
import QuestionsList from '../components/faq/QuestionsList.svelte';

// Data
import unitsList from '../data/unitsList';
import docsList from '../data/docsList';
import videosList from '../data/videosList';
import photosList from '../data/photosList';
import lossList from '../data/lossList';
import donateList from '../data/donateList';
import questionsList from '../data/questionsList';



let showUnitsRF = false,
	showDocsRF = false,
	showVideosRF = false,
	showPhotosRF = false,
	showUnitsRB = false,
	showDocsRB = false,
	showVideosRB = false,
	showPhotosRB = false;
</script>


<svelte:head>
    <title>🇺🇦 #STOPWAR</title>
</svelte:head>

<div class="section-body bg-img" style="height: 500px; background-image: url(https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/bg/header_bg.png);" />

<!-- F2DD31 4F72B6 -->
<FirstSection >
    <Card style="max-width: 760px; ">
      <Content style="display: flex; align-items: center; flex-direction: column;">
			<p> Этот сайт создан c помощью представителей МВД Украины. На нем вы найдете информацию о пленных и убитых российских солдатах в Украине, с момента начала оккупации. Здесь мы будем оперативно размещать фото и видео, которые мы получаем с поля боя.
				Если ваши родственники или знакомые находятся в Украине и участвуют в войне против нашего народа - здесь вы сможете получить информацию об их судьбе.
			</p>
			<p>
				К сожалению, очень много убитых сложно опознать. Мы сознательно выкладываем эти фото и видео, возможно вы опознаете кого-то по косвенным признакам.
				Информация обновляется постоянно.
			</p>


			<FindForm color='F2DD31'/>
			<!-- <SocialPanelYellowIcons title="🇺🇦 #STOPWAR"/> -->
	  </Content>
    </Card>
</FirstSection>

<div class="section-body bg-img" style="height: 500px; background-image: url(https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/bg/prisoners_bg.png);"/>
<CalculatorSection >
	<div style="display: flex; justify-content: center; flex-direction: column; flex-wrap: no-wrap; width: 400px;">
		<List class="demo-list">
			{#each lossList as loss}
				<Item style="height: 100px;">
					<Graphic style="background-image: url({loss.img});" />
					<Text>
						<PrimaryText style="font: 26px 'impact';">{loss.number}</PrimaryText>
						<SecondaryText>{loss.type}</SecondaryText>
					</Text>
				</Item>
			{/each}
		</List>
	</div>
	
</CalculatorSection>

<div class="section-body bg-img" style="height: 500px; background-image: url(https://raw.githubusercontent.com/oleg-darkdev/rf200/master/static/img/bg/prisoners_bg.png);" />
<InfoSection >
	<div style="display: flex; align-items: center; flex-direction: column; flex-wrap: no-wrap; width: 100%;">
		<FindForm color='4F72B6' />
		<div style="display: flex; align-items: center; flex-direction: column; margin-bottom: 25px;">
			<h2>Вооружённые силы Российской Федерации</h2>
			<ListCard bind:showSection={showUnitsRF} text='Военные части - Россия'/>
			{#if showUnitsRF}
				<List class="demo-list">
					{#each unitsList as unit}
						<Item style="height: 70px;">
							<Text>
								<PrimaryText style="color: #1A1A1A;">{unit.name}</PrimaryText>
								<SecondaryText style="color: #1A1A1A;">{unit.addres}</SecondaryText>
							</Text>
						</Item>
					{/each}
				</List>
			{/if}
			<ListCard bind:showSection={showDocsRF}  text='Найденные документы - Россия'/>
			{#if showDocsRF}
				{#each docsList as document}
					<Card>
						<Media class="card-media-16x9" aspectRatio="16x9" style="background-image: url({document.img});" />
						<Content style="color: #888;">{document.text}</Content>
					</Card>
				{/each}
			{/if}
			<!-- <ListCard bind:showSection={showVideos}  text='Видео пленных РФ'/>
			{#if showVideos}
				{#each videosList as video}
					<Card>
						<Media class="card-media-16x9" aspectRatio="16x9">
							<iframe width="560" height="315" src="{video}" frameborder="0" allowfullscreen></iframe>
						</Media>
					</Card>
				{/each}
			{/if} -->
			<ListCard bind:showSection={showPhotosRF}  text='Фото пленных - Россия'/>
			{#if showPhotosRF}
				{#each photosList as photo}
					<Card>
						<Media class="card-media-16x9" aspectRatio="16x9" style="background-image: url({photo.img});" />
						<Content style="color: #888;">{photo.text}</Content>
					</Card>
				{/each}
			{/if}
		</div>
		<div style="display: flex; align-items: center; flex-direction: column;">
			<h2>Вооружённые силы Республики Беларусь</h2>
			<ListCard bind:showSection={showUnitsRB} text='Военные части - Беларусь'/>
			{#if showUnitsRB}
				<List class="demo-list">
					{#each unitsList as unit}
						<Item style="height: 70px;">
							<Text>
								<PrimaryText style="color: #1A1A1A;">{unit.name}</PrimaryText>
								<SecondaryText style="color: #1A1A1A;">{unit.addres}</SecondaryText>
							</Text>
						</Item>
					{/each}
				</List>
			{/if}
			<ListCard bind:showSection={showDocsRB}  text='Найденные документы  - Беларусь'/>
			{#if showDocsRB}
				{#each docsList as document}
					<Card>
						<Media class="card-media-16x9" aspectRatio="16x9" style="background-image: url({document.img});" />
						<Content style="color: #888;">{document.text}</Content>
					</Card>
				{/each}
			{/if}
			<!-- <ListCard bind:showSection={showVideos}  text='Видео пленных РФ'/>
			{#if showVideos}
				{#each videosList as video}
					<Card>
						<Media class="card-media-16x9" aspectRatio="16x9">
							<iframe width="560" height="315" src="{video}" frameborder="0" allowfullscreen></iframe>
						</Media>
					</Card>
				{/each}
			{/if} -->
			<ListCard bind:showSection={showPhotosRB}  text='Фото пленных  - Беларусь'/>
			{#if showPhotosRB}
				{#each photosList as photo}
					<Card>
						<Media class="card-media-16x9" aspectRatio="16x9" style="background-image: url({photo.img});" />
						<Content style="color: #888;">{photo.text}</Content>
					</Card>
				{/each}
			{/if}
		</div>
	</div>
</InfoSection>


<div class="section-body bg-img" style="height: 50vh; background-image: url(https://raw.githubusercontent.com/oleg-darkdev/rf200/master/static/img/bg/support_bg.png);" />
<YellowSection >
  <Card style="max-width: 760px; ">
      <Content>
			<List class="demo-list">
				{#each donateList as donate}
					<Item style="height: 70px;">
						<Text>
							<PrimaryText style="color: #4F72B6;">Кому: {donate.name}</PrimaryText>
							<SecondaryText style="color: #F2DD31;">Счёт: {donate.details}</SecondaryText>
						</Text>
					</Item>
				{/each}
			</List>
	  </Content>
    </Card>	
</YellowSection>  

<div class="section-body bg-img" style="height: 50vh; background-image: url();" />
<YellowSection >
	<!-- {#each Object.values(gamesFAQ) as game} -->
		<QuestionsList data={questionsList}/>
	<!-- {/each}   -->
</YellowSection>  








<div class="section-body bg-img" style="height: 50vh; background-image: url();" />
<!-- <div class="section-body bg-img" style="height: 50vh; background-image: url();" /> -->
<!-- <div class="section-body bg-img" style="height: 50vh; background-image: url();" /> -->








<style>

</style>
