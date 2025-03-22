import { Component, TemplateRef, ElementRef, ViewChild } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-chat-selector',
  templateUrl: './chat-selector.component.html',
  styleUrls: ['./chat-selector.component.scss'],
})
export class ChatSelectorComponent {
  constructor(private router: Router, private dialog: MatDialog) {}

  maxSelection = 3;

  aiModels = [
    { name: 'Grok', subOptions: ['Deep Search', 'Think'] },
    { name: 'OpenAI', subOptions: ['Deep Search', 'Think'] },
    { name: 'Gemini' },
    { name: 'Claude' },
    { name: 'DeepSeek' },
    { name: 'Qwen' },
    { name: 'llama' },
    { name: 'Gemma' },
  ];

  selectedModels: any[] = [];
  selectedModelsRight: any[] = [];
  isModalOpen = false;
  @ViewChild('warningModal') warningModal!: TemplateRef<any>;
  @ViewChild('nextButton', { read: ElementRef }) nextButton!: ElementRef; // Reference to the Next button

  getWarningModal(): TemplateRef<any> {
    return this.warningModal;
  }
  ngAfterViewInit() {
    // Close modal when clicking the close button
    $(document).on('click', '.close-modal', () => {
      this.closeModal();
    });
  }
  toggleSelection(model: any) {
    const index = this.selectedModels.findIndex(m => m.name === model.name);
    const indexRight = this.selectedModelsRight.findIndex(m => m.name === model.name);
  
    if (index > -1) {
      this.selectedModels.splice(index, 1);
    } else if (indexRight > -1) {
      this.selectedModelsRight.splice(indexRight, 1);
    } else {
      if (this.selectedModels.length <= this.selectedModelsRight.length) {
        this.selectedModels.push(model);
      } else {
        this.selectedModelsRight.push(model);
      }
    }
  
    // Force UI to update
    this.selectedModels = [...this.selectedModels];
    this.selectedModelsRight = [...this.selectedModelsRight];
  }
  
  isSelected(modelName: string): boolean {
    return (
      this.selectedModels.some(m => m.name === modelName) ||
      this.selectedModelsRight.some(m => m.name === modelName)
    );
  }
  onNextClick() {
    if (this.selectedModels.length === 0) {
      this.dialog.open(this.warningModal);
    } else {
      this.goToChat();
    }
  }
  goToChat() {
    console.log('Selected AI Models:', this.selectedModels);
    console.log('Proceeding with: ' + this.selectedModels.map((m) => m.name).join(', '));
    this.router.navigate(['/chat']); // Ensure '/chat' is correctly set in your routes
  }
  closeModal() {
    this.isModalOpen = false;
    setTimeout(() => this.nextButton.nativeElement.focus(), 0); // Restore focus to the Next button
  }
}
