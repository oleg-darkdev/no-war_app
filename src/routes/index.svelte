<script>
import Card, {
    Content,
    Media,
} from '@smui/card';


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
import QuestionsList from '../components/faq/QuestionsList.svelte';
import Support from '../components/Support.svelte';

// Data

import occupantsData from '../data/occupantsData';
import questionsList from '../data/questionsList';



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
				Совместная агрессия России и Беларуси против Украины вынуждает нас всех принимать решения и становиться на одну из сторон. 
			</p>

			<FindForm color='F2DD31'/>
	  </Content>
    </Card>
</FirstSection>

<div class="section-body bg-img" style="height: 500px; background-image: url(https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/bg/calculator_bg.png);"/>
<CalculatorSection >
	<div style="display: flex; justify-content: center; flex-direction: column; flex-wrap: no-wrap; width: 400px;">
		<Calculator data={occupantsData.rf.lossListRF}/>
	</div>	
</CalculatorSection>

<div class="section-body bg-img" style="height: 500px; background-image: url(https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/bg/prisoners_bg.png);" />
<InfoSection >
	<div style="display: flex; align-items: center; flex-direction: column; flex-wrap: no-wrap; width: 100%;">
		<FindForm color='4F72B6' />
		<InfoOccupantsRF />		
	</div>
</InfoSection>


<!-- <div class="section-body bg-img" style="height: 60vh; background-image: url(https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/bg/support_bg.png);" />
<YellowSection >
	<Support />
</YellowSection>   -->

<div class="section-body bg-img" style="height: 60vh; background-image: url(https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/bg/faq_bg.png);" />
<BlueSection >
		<QuestionsList data={questionsList}/>
</BlueSection>  


<div class="section-body bg-img" style="height: 60vh; background-image: url(https://raw.githubusercontent.com/oleg-darkdev/no-war/master/static/img/bg/contacts_bg.png);" />
<YellowSection >
	<SocialPanelYellowIcons title="🇺🇦 #STOPWAR"/>
</YellowSection>  





<!-- <div class="section-body bg-img" style="height: 60vh; background-image: url();" /> -->
<!-- <div class="section-body bg-img" style="height: 60vh; background-image: url();" /> -->








<style>

</style>
