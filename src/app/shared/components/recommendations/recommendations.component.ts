import {Component, OnInit} from '@angular/core';
import {MatLegacyDialog as MatDialog} from '@angular/material/legacy-dialog';
import Book from '../../models/book';
import {BookInfoModalComponent} from '../book-info-modal/book-info-modal.component';

@Component({
	selector: 'app-recommendations',
	templateUrl: './recommendations.component.html',
	styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {
	recommendations: Book[] = [
		{
			title: 'How We Disappeared',
			author: 'Jing-Jing Lee',
			cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1548266344l/42550681.jpg',
			description: "Singapore, 1942. As Japanese troops sweep down Malaysia and into Singapore, a village is ransacked, leaving only two survivors and one tiny child. In a neighboring village, seventeen-year-old Wang Di is strapped into the back of a troop carrier and shipped off to a Japanese military brothel where she is forced into sexual slavery as a 'comfort woman.' After sixty years of silence, what she saw and experienced still haunts her. In the year 2000, twelve-year-old Kevin is sitting beside his ailing grandmother when he overhears a mumbled confession. He sets out to discover the truth, wherever it might lead, setting in motion a chain of events he never could have foreseen. Weaving together two time lines and two very big secrets, this stunning debut opens a window on a little-known period of history, revealing the strength and bravery shown by numerous women in the face of terrible cruelty. Drawing in part on her family's experiences, Jing-Jing Lee has crafted a profoundly moving, unforgettable novel about human resilience, the bonds of family and the courage it takes to confront the past."
		},
		{
			title: 'Long Live the Tribe of Fatherless Girls',
			author: 'T Kira Madden',
			cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546015233l/40046084.jpg',
			description: "Acclaimed literary essayist T Kira Madden's raw and redemptive debut memoir is about coming of age and reckoning with desire as a queer, biracial teenager amidst the fierce contradictions of Boca Raton, Florida, a place where she found cult-like privilege, shocking racial disparities, rampant white-collar crime, and powerfully destructive standards of beauty hiding in plain sight. As a child, Madden lived a life of extravagance, from her exclusive private school to her equestrian trophies and designer shoe-brand name. But under the surface was a wild instability. The only child of parents continually battling drug and alcohol addictions, Madden confronted her environment alone. Facing a culture of assault and objectification, she found lifelines in the desperately loving friendships of fatherless girls. With unflinching honesty and lyrical prose, spanning from 1960s Hawai'i to the present-day struggle of a young woman mourning the loss of a father while unearthing truths that reframe her reality, Long Live the Tribe of Fatherless Girls is equal parts eulogy and love letter. It's a story about trauma and forgiveness, about families of blood and affinity, both lost and found, unmade and rebuilt, crooked and beautiful."
		},
		{
			title: "I'm So Effing Tired: A Proven Plan to Beat Burnout, Boost Your Energy, and Reclaim Your Life",
			author: 'Amy Shah',
			cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1593147940l/53968489.jpg',
			description: "Does it feel like your life is too busy, your days are too short, and you're feeling overworked, overstressed, and overtired?   Chances are you’ve asked your doctor for help, only to be told that it’s because of your age, or your workload, or, worse, that it’s just “normal.” If so, you’re not alone. Women of all ages are suffering from an epidemic of fatigue and burnout. But exhaustion doesn’t have to be your new normal.  Inspired by her personal wellness journey, integrative medical doctor Amy Shah has created this program so that you can regain your energy and reclaim your life. The key is tapping into the powerful energy trifecta: the complex relationship between your gut, your immune system, and your hormones."
		},
		{
			title: "Empire of Ice and Stone: The Disastrous and Heroic Voyage of the Karluk",
			author: 'Buddy Levy',
			cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1644887746l/59808184.jpg',
			description: "In the summer of 1913, the wooden-hulled brigantine Karluk departed Canada for the Arctic Ocean. At the helm was Captain Bob Bartlett, considered the world’s greatest living ice navigator. The expedition’s visionary leader was a flamboyant impresario named Vilhjalmur Stefansson hungry for fame. Just six weeks after the Karluk departed, giant ice floes closed in around her. As the ship became icebound, Stefansson disembarked with five companions and struck out on what he claimed was a 10-day caribou hunting trip. Most on board would never see him again. Twenty-two men and an Inuit woman with two small daughters now stood on a mile-square ice floe, their ship and their original leader gone. Under Bartlett’s leadership they built make-shift shelters, surviving the freezing darkness of Polar night. Captain Bartlett now made a difficult and courageous decision. He would take one of the young Inuit hunters and attempt a 1000-mile journey to save the shipwrecked survivors. It was their only hope. Set against the backdrop of the Titanic disaster and World War I, filled with heroism, tragedy, and scientific discovery, Buddy Levy's Empire of Ice and Stone tells the story of two men and two distinctively different brands of leadership: one selfless, one self-serving, and how they would forever be bound by one of the most audacious and disastrous expeditions in polar history, considered the last great voyage of The Heroic Age of Discovery."
		},
		{
			title: "The Water Will Come: Rising Seas, Sinking Cities, and the Remaking of the Civilized World",
			author: 'Jeff Goodell',
			cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1493224870l/34523152.jpg',
			description: "What if Atlantis wasn't a myth but an early precursor to a new age of great flooding? Across the globe, scientists and civilians alike are noticing rapidly rising sea levels and higher and higher tides pushing more water directly into the places we live, from our most vibrant, historic cities to our last remaining traditional coastal villages. With each crack in the great ice sheets of the Arctic and Antarctica, and each tick upwards of Earth's thermometer, we are moving closer to the brink of broad disaster. By century's end, hundreds of millions of people will be retreating from the world's shores as our coasts become inundated and our landscapes transformed. From island nations to the world's major cities, coastal regions will disappear. Engineering projects to hold back the water are bold and may buy some time. Yet despite international efforts and tireless research, there is no permanent solution--no barriers to erect or walls to build--that will protect us in the end from the drowning of the world as we know it. The Water Will Come is the definitive account of the coming water, why and how this will happen, and what it will all mean. As he travels across twelve countries and reports from the front lines, acclaimed journalist Jeff Goodell employs fact, science, and first-person, on-the-ground journalism to show vivid scenes from what already is becoming a water world."
		}
	];
	random: Book = this.recommendations[0];

	constructor(public dialog: MatDialog) { }

	ngOnInit(): void {
		this.random = this.recommendations[Math.floor(Math.random() * this.recommendations.length)];
	}

	openInfoDialog(book:Book) {
		this.dialog.open(BookInfoModalComponent, {
			data: {
				book: book,
			},
			height: '98%',
            width: '100%'
		});
	}

}
