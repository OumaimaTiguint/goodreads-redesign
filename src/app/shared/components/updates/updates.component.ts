import {Shelf} from './../../models/book';
import {Component, OnInit} from '@angular/core';
import {BookInfoModalComponent} from '../book-info-modal/book-info-modal.component';
import {MatDialog} from '@angular/material/dialog';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {StarRatingModule} from 'angular-star-rating';

@Component({
	selector: 'app-updates',
	standalone: true,
	imports: [
		CommonModule,
		StarRatingModule,
		MatCardModule
	],
	templateUrl: './updates.component.html',
	styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent implements OnInit {
	shelves: any[] = [
		{value: Shelf.toRead, name: 'wants to read'},
		{value: Shelf.dnf, name: 'did not finish'},
		{value: Shelf.currentlyReading, name: 'started Reading'},
		{value: Shelf.read, name: 'finished'}
	];

	updates: any[] = [
		{
			name: 'Usman Eliott',
			update: Shelf.dnf,
			title: '1Q84',
			author: 'Haruki Murakami',
			cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1483103331l/10357575.jpg',
			description: "The year is 1984 and the city is Tokyo. A young woman named Aomame follows a taxi driver’s enigmatic suggestion and begins to notice puzzling discrepancies in the world around her. She has entered, she realizes, a parallel existence, which she calls 1Q84 —“Q is for ‘question mark.’ A world that bears a question.” Meanwhile, an aspiring writer named Tengo takes on a suspect ghostwriting project. He becomes so wrapped up with the work and its unusual author that, soon, his previously placid life begins to come unraveled. As Aomame’s and Tengo’s narratives converge over the course of this single year, we learn of the profound and tangled connections that bind them ever closer: a beautiful, dyslexic teenage girl with a unique vision; a mysterious religious cult that instigated a shoot-out with the metropolitan police; a reclusive, wealthy dowager who runs a shelter for abused women; a hideously ugly private investigator; a mild-mannered yet ruthlessly efficient bodyguard; and a peculiarly insistent television-fee collector. A love story, a mystery, a fantasy, a novel of self-discovery, a dystopia to rival George Orwell’s — 1Q84 is Haruki Murakami’s most ambitious undertaking yet: an instant best seller in his native Japan, and a tremendous feat of imagination from one of our most revered contemporary writers."
		},
		{
			name: 'Ekaterina Nelson',
			update: Shelf.currentlyReading,
			title: 'Bunny',
			author: 'Mona Awad',
			cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544742360l/42815544.jpg',
			description: "Samantha Heather Mackey couldn't be more of an outsider in her small, highly selective MFA program at New England's Warren University. A scholarship student who prefers the company of her dark imagination to that of most people, she is utterly repelled by the rest of her fiction writing cohort--a clique of unbearably twee rich girls who call each other 'Bunny' and seem to move and speak as one.But everything changes when Samantha receives an invitation to the Bunnies' fabled 'Smut Salon' and finds herself inexplicably drawn to their front door--ditching her only friend, Ava, in the process. As Samantha plunges deeper and deeper into the Bunnies' sinister yet saccharine world, beginning to take part in the ritualistic off-campus 'Workshop' where they conjure their monstrous creations, the edges of reality begin to blur. Soon, her friendships with Ava and the Bunnies will be brought into deadly collision. The spellbinding new novel from one of our most fearless chroniclers of the female experience, Bunny is a down-the-rabbit-hole tale of loneliness and belonging, friendship and desire, and the fantastic and terrible power of the imagination."
		},
		{
			name: 'Ekaterina Nelson',
			update: Shelf.read,
			rating: 5,
			title: 'Everything I know about love',
			author: 'Dolly Alderton',
			cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1563761980l/46041465.jpg',
			description: "The wildly funny, occasionally heartbreaking internationally bestselling memoir about growing up, growing older, and learning to navigate friendships, jobs, loss, and love along the ride When it comes to the trials and triumphs of becoming an adult, journalist and former Sunday Times columnist Dolly Alderton has seen and tried it all. In her memoir, she vividly recounts falling in love, finding a job, getting drunk, getting dumped, realizing that Ivan from the corner shop might just be the only reliable man in her life, and that absolutely no one can ever compare to her best girlfriends. Everything I Know About Love is about bad dates, good friends and—above all else— realizing that you are enough. Glittering with wit and insight, heart and humor, Dolly Alderton’s unforgettable debut weaves together personal stories, satirical observations, a series of lists, recipes, and other vignettes that will strike a chord of recognition with women of every age—making you want to pick up the phone and tell your best friends all about it. Like Bridget Jones’ Diary but all true, Everything I Know About Love is about the struggles of early adulthood in all its terrifying and hopeful uncertainty."
		},
		{
			name: 'Joaquin Fan',
			update: Shelf.currentlyReading,
			title: 'This is Going to Hurt: Secret Diaries of a Junior Doctor',
			author: 'Adam Kay',
			cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1498340278l/35510008._SY475_.jpg',
			description: "Welcome to the life of a junior doctor: 97-hour weeks, life and death decisions, a constant tsunami of bodily fluids, and the hospital parking meter earns more than you. Scribbled in secret after endless days, sleepless nights and missed weekends, Adam Kay's This is Going to Hurt provides a no-holds-barred account of his time on the NHS front line. Hilarious, horrifying and heartbreaking, this diary is everything you wanted to know – and more than a few things you didn't – about life on and off the hospital ward."
		}
	];

	constructor(public dialog: MatDialog) { }

	ngOnInit(): void {
	}

	getUpdate(shelf:Shelf) {
		return this.shelves.find(s => s.value == shelf).name;
	}

	openInfoDialog(book:any) {
		this.dialog.open(BookInfoModalComponent, {
			data: {
				book: book,
			},
			height: '98%',
            width: '100%'
		});
	}
}
