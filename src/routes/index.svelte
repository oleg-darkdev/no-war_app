<script>
import Card, {
    Content,
    Media,
} from '@smui/card';
import Button, { Label } from '@smui/button';

// Layout
import FirstSection from '../layout/FirstSection.svelte';
import BlueSection from '../layout/BlueSection.svelte';
import InfoSection from '../layout/InfoSection.svelte';
import YellowSection from '../layout/YellowSection.svelte';
import CalculatorSection from '../layout/CalculatorSection.svelte';
import SocialPanelYellowIcons from '../layout/SocialPanelYellowIcons.svelte';
import FindForm from '../components/FindForm.svelte';
// Components
import InfoOccupantsRF from '../components/InfoOccupants.svelte';
import Calculator from '../components/Calculator.svelte';
import News from '../components/News.svelte';
import QuestionsList from '../components/faq/QuestionsList.svelte';
import Support from '../components/Support.svelte';



// Data
import occupantsData from '../data/occupantsData';
import questionsList from '../data/questionsList';

import Table from '../components/Table.svelte';

</script>


<svelte:head>
    <title>🇺🇦 #STOPWAR</title>
</svelte:head>


<div class="section-body bg-img" style="height: 500px; background-image: url(https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/bg/header_bg.png);" />
<div class="navigation-wrap">
	<Card style="width: 230px; height: 250px;  margin: -50px 0 0 0;  ">
		<Content style="display: flex; align-items: center; flex-direction: column; color: #fff;">
			<div class="navigation-menu">
				<span class="mdc-typography--headline4">Навигация</span>
			<Button href="#prisioners-list">
			<Label>Список военных</Label>
			</Button>
			<Button href="#find-form">
			<Label>Поиск людей</Label>
			</Button>
			<Button href="#сalculator">
			<Label>Потери РФ </Label>
			</Button>
			<Button href="#faq">
			<Label>Вопросы / ответы</Label>
			</Button>
			<Button href="#contacts">
			<Label>Контакты</Label>
			</Button>
		</div>
		</Content>
	</Card>
</div>
<FirstSection >
    <Card slot="content" style="max-width: 760px; ">
      <Content style="display: flex; align-items: center; flex-direction: column; color: #fff;">
			<p> Этот сайт создан c помощью представителей МВД Украины. На нем вы найдете информацию о пленных и убитых российских солдатах в Украине, с момента начала оккупации. Здесь мы будем оперативно размещать фото и видео, которые мы получаем с поля боя.
				Если ваши родственники или знакомые находятся в Украине и участвуют в войне против нашего народа - здесь вы сможете получить информацию об их судьбе.
			</p>

			<p>
				Совместная агрессия России и Беларуси против Украины вынуждает нас всех принимать решения и становиться на одну из сторон. 
			</p>

			<FindForm color='F2DD31'/>
	  </Content>
    </Card>
</FirstSection>


<a name="prisioners-list"></a>
<div class="section-body bg-img" style="height: 500px; background-image: url(https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/bg/prisoners_bg.png);" />
<Table />
<InfoSection >
	<div style="display: flex; align-items: center; flex-direction: column; flex-wrap: no-wrap; width: 100%;">
		<a name="find-form"></a>
		<FindForm color='4F72B6' />
		<InfoOccupantsRF />		
	</div>
</InfoSection>

<div class="section-body bg-img" style="height: 60vh; background-image: url(https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/bg/news_bg.png);" />
<News />

<a name="сalculator"></a>
<div class="section-body bg-img" style="height: 500px; background-image: url(https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/bg/calculator_bg.png);"/>
<Calculator data={occupantsData.rf.lossListRF}/>

<!-- <div class="section-body bg-img" style="height: 60vh; background-image: url(https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/bg/support_bg.png);" />
<YellowSection >
	<Support />
</YellowSection>   -->

<a name="faq"></a>
<div class="section-body bg-img" style="height: 60vh; background-image: url(https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/bg/faq_bg.png);" />
<BlueSection >
	<QuestionsList data={questionsList}/>
</BlueSection>  

<a name="contacts"></a> 
<div class="section-body bg-img" style="height: 60vh; background-image: url(https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/bg/contacts_bg.png);" />
<YellowSection >
	<SocialPanelYellowIcons title="🇺🇦 #STOPWAR"/>
</YellowSection>  


<style>
	.navigation-wrap {
		display: flex;
		justify-content: center;
	}
	.navigation-menu {
		display: flex;
		flex-direction: column;
		justify-content: center;		
		
	}
</style>