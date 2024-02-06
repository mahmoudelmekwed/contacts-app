import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { ContactsService } from '../contacts/contacts.service'

@Component({
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contactForm = new FormGroup({
  firstName : new FormControl(),
  lastName : new FormControl(),
  dateOfBirth : new FormControl(),
  favoritesRanking : new FormControl()
})


  constructor(private route: ActivatedRoute
   , private contactsService : ContactsService) { }

  ngOnInit() {
    const contactId = this.route.snapshot.params['id'];
    if (!contactId) return

    this.contactsService.getContact(contactId).subscribe((contact) => {
      if (!contact) return;

      this.contactForm.controls.firstName.setValue(contact.firstName)
    })
  }

  saveContact() {
     console.log(this.contactForm.value);
  }
}