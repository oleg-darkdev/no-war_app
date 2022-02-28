<script>	
import Card, {
    Media,
	Content
} from '@smui/card';

import List, {
    Item,
    Graphic,
    Meta,
    Text,
    PrimaryText,
    SecondaryText,
  } from '@smui/list';

import donateList from '../data/donateList';
</script>
  
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