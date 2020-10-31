import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GenerationsComponent } from './generations.component';

describe('GenerationsComponent', () => {
  let component: GenerationsComponent;
  let fixture: ComponentFixture<GenerationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerationsComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    expect(await component).toBeTruthy();
  });

  describe('#adjustGenerationName', () => {
    it('should uppercase generation name', async () => {
      const subject = await component.adjustGenerationName('generation-i');
      expect(subject).toEqual('Generation I');
    });
  });
});
