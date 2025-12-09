package com.example.lab2_properties;

import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.SeekBar;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class MainActivity extends AppCompatActivity {
    ImageView imageView;
    Button prevButton, nextButton;
    SeekBar redSeekBar, greenSeekBar, blueSeekBar;
    TextView redValueText, greenValueText, blueValueText;
    View editableView;

    int[] images = {
            R.drawable.korwin,
            R.drawable.mentzen,
            R.drawable.urban
    };
    int currentIndex = 0;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });

        imageView = findViewById(R.id.picture);
        prevButton = findViewById(R.id.prevButton);
        nextButton = findViewById(R.id.nextButton);
        imageView.setImageResource(images[currentIndex]);

        redSeekBar = findViewById(R.id.redSeekBar);
        greenSeekBar = findViewById(R.id.greenSeekBar);
        blueSeekBar = findViewById(R.id.blueSeekBar);

        redValueText = findViewById(R.id.redValueText);
        greenValueText = findViewById(R.id.greenValueText);
        blueValueText = findViewById(R.id.blueValueText);

        editableView = findViewById(R.id.editableView);

        prevButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                prevImage();
            }
        });

        nextButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                nextImage();
            }

        });

        redSeekBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                redValueText.setText(""+progress);
                updateEditableViewColor();
            }
            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {}
            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {}
        });
        greenSeekBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                greenValueText.setText(""+progress);
                updateEditableViewColor();
            }
            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {}
            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {}
        });
        blueSeekBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                blueValueText.setText(""+progress);
                updateEditableViewColor();
            }
            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {}
            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {}
        });
    }

    public void nextImage() {
        if (currentIndex < images.length -1) {
            currentIndex++;
            imageView.setImageResource(images[currentIndex]);
        }
    }
    public void prevImage() {
        if (currentIndex > 0) {
            currentIndex--;
            imageView.setImageResource(images[currentIndex]);
        }
    }

    public void updateEditableViewColor() {
        int r = redSeekBar.getProgress();
        int g = greenSeekBar.getProgress();
        int b = blueSeekBar.getProgress();

        editableView.setBackgroundColor(Color.rgb(r, g, b));
    }
}