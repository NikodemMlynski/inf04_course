package com.example.listy;

import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.Toast;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {
    EditText editText;
    Button addBtn;
    ListView listView; // rzeczywisty element w xml (widok)

    ArrayList<String> items; // dane do listy
    ArrayAdapter<String> adapter; // łącznik pomiędzy danymi a widokiem
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

         editText = findViewById(R.id.editText);
         addBtn = findViewById(R.id.addBtn);
         listView = findViewById(R.id.listView);

         items = new ArrayList<>();
         adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, items);
         listView.setAdapter(adapter);

         addBtn.setOnClickListener(new View.OnClickListener() {
             @Override
             public void onClick(View v) {
                addItem();
             }
         });
         listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
             @Override
             public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                 Toast.makeText(MainActivity.this, items.get(position), Toast.LENGTH_SHORT).show();
             }
         });

    }

    private void addItem() {
        String text = editText.getText().toString().trim();
        if(!text.isEmpty()) {
            items.add(text);
            adapter.notifyDataSetChanged();
            editText.setText("");
        }

    }
}