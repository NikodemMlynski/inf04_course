package com.example.lab1_controls;

import android.os.Bundle;

import androidx.activity.EdgeToEdge;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.CompoundButton;
import android.widget.EditText;
import android.widget.SeekBar;
import android.widget.Switch;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    EditText editName;
    CheckBox checkBox;
    Switch switchOption;
    SeekBar seekBar;
    TextView txtSeekValue, txtOutput, txtNameValue, txtCheckboxValue, txtSwitchValue;
    Button btnShow;
    Button btnShow2;

    int seekValue = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Łączenie XML z Javą
        editName = findViewById(R.id.editName);
        checkBox = findViewById(R.id.checkBox);
        switchOption = findViewById(R.id.switchOption);
        seekBar = findViewById(R.id.seekBar);
        txtSeekValue = findViewById(R.id.txtSeekValue);
        txtOutput = findViewById(R.id.txtOutput);
        btnShow = findViewById(R.id.btnShow);
        btnShow2 = findViewById(R.id.btnShow2);
        txtNameValue = findViewById(R.id.txtNameValue);
        txtCheckboxValue = findViewById(R.id.txtCheckboxValue);
        txtSwitchValue = findViewById(R.id.txtSwitchValue);


        switchOption.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(@NonNull CompoundButton buttonView, boolean isChecked) {
                txtSwitchValue.setText(isChecked ? "włączony" : "wyłączony");
            }
        });

        editName.addTextChangedListener(new TextWatcher() {
            @Override
            public void afterTextChanged(Editable s) {
                if (s.toString().isEmpty()) {  // można też s.toString().length() == 0
                    txtNameValue.setText("Wprowadź imie");
                } else {
                    txtNameValue.setText(s.toString());
                }
            }

            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {

            }
        });
        checkBox.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(@NonNull CompoundButton buttonView, boolean isChecked) {
                txtCheckboxValue.setText(isChecked ? "zaznaczony" : "niezaznaczony");
            }
        });
        // Obsługa SeekBar
        seekBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                seekValue = progress;
                txtSeekValue.setText("Wartość slidera: " + seekValue);
            }

            @Override public void onStartTrackingTouch(SeekBar seekBar) { }
            @Override public void onStopTrackingTouch(SeekBar seekBar) { }
        });

        // Obsługa przycisku
        btnShow.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onButtonClick();
            }
        });
        btnShow2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onButton2Click();
            }
        });
    }
    public void onButtonClick() {
        String name = editName.getText().toString();
        boolean isChecked = checkBox.isChecked();
        boolean isSwitchOn = switchOption.isChecked();

        String result =
                "Imię: " + name + "\n" +
                        "Checkbox: " + (isChecked ? "Zaznaczony" : "Odznaczony") + "\n" +
                        "Switch: " + (isSwitchOn ? "Włączony" : "Wyłączony") + "\n" +
                        "Slider: " + seekValue;

        txtOutput.setText(result);

    }
    public void onButton2Click() {
        String name = editName.getText().toString();
        Toast.makeText(MainActivity.this, "Witaj " + name, Toast.LENGTH_SHORT).show();
    }
}